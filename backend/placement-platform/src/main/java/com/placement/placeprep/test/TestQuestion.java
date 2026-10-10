package com.placement.placeprep.test;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "test_questions")
public class TestQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "test_id", nullable = false)
    private MockTest test;

    @Column(nullable = false, length = 2000)
    private String questionText;

    @Column(length = 2000)
    private String explanation;

    private int points = 1;

    @OneToMany(
        mappedBy = "question",
        cascade = CascadeType.ALL,
        orphanRemoval = true
    )
    private List<TestOption> options = new ArrayList<>();

    public TestQuestion() {
    }

    public Long getId() {
        return id;
    }

    public MockTest getTest() {
        return test;
    }

    public void setTest(MockTest test) {
        this.test = test;
    }

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public List<TestOption> getOptions() {
        return options;
    }

    public void addOption(TestOption option) {
        options.add(option);
        option.setQuestion(this);
    }
}
