
package com.placement.placeprep.attempt;

import com.placement.placeprep.test.MockTest;
import com.placement.placeprep.test.MockTestRepository;
import com.placement.placeprep.test.TestQuestion;
import com.placement.placeprep.test.TestOption;

import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/attempts")
public class AttemptController {

    private final MockTestRepository testRepository;
    private final TestAttemptRepository attemptRepository;

    public AttemptController(
            MockTestRepository testRepository,
            TestAttemptRepository attemptRepository) {

        this.testRepository = testRepository;
        this.attemptRepository = attemptRepository;
    }

    public record SubmitRequest(
            Map<Long, Long> answers) {
    }

    // Submit answers and calculate the result
    @PostMapping
    @Transactional
    public Map<String, Object> submitTest(
            @RequestParam Long testId,
            @RequestBody SubmitRequest request) {

        MockTest test = testRepository.findById(testId)
                .orElseThrow(() ->
                        new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                "Mock test not found"
                        )
                );

        Map<Long, Long> answers =
                request.answers() == null
                        ? Map.of()
                        : request.answers();

        int correctAnswers = 0;
        int totalMarks = 0;

        for (TestQuestion question : test.getQuestions()) {

            totalMarks += question.getPoints();

            Long selectedOptionId =
                    answers.get(question.getId());

            if (selectedOptionId == null) {
                continue;
            }

            boolean correct = question.getOptions()
                    .stream()
                    .anyMatch(option ->
                            option.getId().equals(selectedOptionId)
                                    && option.isCorrect()
                    );

            if (correct) {
                correctAnswers += question.getPoints();
            }
        }

        int totalQuestions = test.getQuestions().size();
        int score = correctAnswers;

        TestAttempt attempt = new TestAttempt(
                test.getId(),
                totalQuestions,
                correctAnswers,
                score,
                totalMarks
        );

        TestAttempt savedAttempt =
                attemptRepository.save(attempt);

        int percentage = totalMarks == 0
                ? 0
                : Math.round(
                        (score * 100.0f) / totalMarks
                );

        return Map.of(
                "attemptId", savedAttempt.getId(),
                "testId", test.getId(),
                "company", test.getCompany(),
                "title", test.getTitle(),
                "totalQuestions", totalQuestions,
                "correctAnswers", correctAnswers,
                "score", score,
                "totalMarks", totalMarks,
                "percentage", percentage,
                "message", "Test submitted successfully"
        );
    }

    // Fetch recent attempt history
    @GetMapping
    public List<TestAttempt> getAttemptHistory() {
        return attemptRepository
                .findAllByOrderBySubmittedAtDesc();
    }
}
