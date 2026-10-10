
package com.placement.placeprep.attempt;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "test_attempts")
public class TestAttempt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long testId;

    @Column(nullable = false)
    private int totalQuestions;

    @Column(nullable = false)
    private int correctAnswers;

    @Column(nullable = false)
    private int score;

    @Column(nullable = false)
    private int totalMarks;

    @Column(nullable = false)
    private LocalDateTime submittedAt;

    public TestAttempt() {
    }

    public TestAttempt(
            Long testId,
            int totalQuestions,
            int correctAnswers,
            int score,
            int totalMarks) {

        this.testId = testId;
        this.totalQuestions = totalQuestions;
        this.correctAnswers = correctAnswers;
        this.score = score;
        this.totalMarks = totalMarks;
        this.submittedAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public Long getTestId() {
        return testId;
    }

    public int getTotalQuestions() {
        return totalQuestions;
    }

    public int getCorrectAnswers() {
        return correctAnswers;
    }

    public int getScore() {
        return score;
    }

    public int getTotalMarks() {
        return totalMarks;
    }

    public LocalDateTime getSubmittedAt() {
        return submittedAt;
    }
}
