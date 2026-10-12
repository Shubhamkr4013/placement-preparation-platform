package com.placement.placeprep.test;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/tests")
@CrossOrigin(origins = "http://localhost:5173")
public class MockTestController {

    private final MockTestRepository mockTestRepository;

    public MockTestController(MockTestRepository mockTestRepository) {
        this.mockTestRepository = mockTestRepository;
    }

    // GET: Fetch all mock tests
    @GetMapping
    public List<Map<String, Object>> getAllTests() {

        return mockTestRepository.findAllByOrderByCompanyAscTitleAsc()
                .stream()
                .map(test -> Map.<String, Object>of(
                        "id", test.getId(),
                        "company", test.getCompany(),
                        "title", test.getTitle(),
                        "category", test.getCategory(),
                        "durationMinutes", test.getDurationMinutes(),
                        "totalQuestions", test.getTotalQuestions(),
                        "difficulty", test.getDifficulty(),
                        "description",
                        test.getDescription() == null
                                ? ""
                                : test.getDescription()
                ))
                .toList();
    }

    // GET: Fetch one mock test with questions and options
    @GetMapping("/{id}")
    public Map<String, Object> getTestById(@PathVariable Long id) {

        MockTest test = mockTestRepository
                .findByIdWithQuestions(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Mock test not found with id: " + id
                ));

        List<Map<String, Object>> questions = test.getQuestions()
                .stream()
                .map(question -> {
                    List<Map<String, Object>> options =
                            question.getOptions()
                                    .stream()
                                    .map(option -> Map.<String, Object>of(
                                            "id", option.getId(),
                                            "optionText",
                                            option.getOptionText()
                                    ))
                                    .toList();

                    return Map.<String, Object>of(
                            "id", question.getId(),
                            "questionText", question.getQuestionText(),
                            "points", question.getPoints(),
                            "options", options
                    );
                })
                .toList();

        return Map.of(
                "id", test.getId(),
                "company", test.getCompany(),
                "title", test.getTitle(),
                "category", test.getCategory(),
                "durationMinutes", test.getDurationMinutes(),
                "totalQuestions", test.getTotalQuestions(),
                "difficulty", test.getDifficulty(),
                "description",
                test.getDescription() == null
                        ? ""
                        : test.getDescription(),
                "questions", questions
        );
    }
}