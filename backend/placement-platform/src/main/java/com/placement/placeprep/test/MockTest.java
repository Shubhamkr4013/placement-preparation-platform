package com.placement.placeprep.test;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "mock_tests")
public class MockTest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String company;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String category;

    private int durationMinutes = 30;

    private int totalQuestions = 0;

    private String difficulty = "Medium";

    @Column(length = 1000)
    private String description;

    @OneToMany(
        mappedBy = "test",
        cascade = CascadeType.ALL,
        orphanRemoval = true
    )
    private List<TestQuestion> questions = new ArrayList<>();

    public MockTest() {
    }

    public Long getId() {
        return id;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getDurationMinutes() {
        return durationMinutes;
    }

    public void setDurationMinutes(int durationMinutes) {
        this.durationMinutes = durationMinutes;
    }

    public int getTotalQuestions() {
        return totalQuestions;
    }

    public void setTotalQuestions(int totalQuestions) {
        this.totalQuestions = totalQuestions;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<TestQuestion> getQuestions() {
        return questions;
    }

    public void addQuestion(TestQuestion question) {
        questions.add(question);
        question.setTest(this);
        totalQuestions = questions.size();
    }
}
