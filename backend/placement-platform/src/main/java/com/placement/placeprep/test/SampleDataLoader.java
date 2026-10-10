
package com.placement.placeprep.test;

import com.placement.placeprep.test.MockTest;
import com.placement.placeprep.test.MockTestRepository;
import com.placement.placeprep.test.TestOption;
import com.placement.placeprep.test.TestQuestion;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SampleDataLoader {

    @Bean
    CommandLineRunner loadSampleTests(
            MockTestRepository repository) {

        return args -> {

            // Do not insert duplicate sample data
            if (repository.count() > 0) {
                return;
            }

            // Test 1: TCS Java
            MockTest javaTest = new MockTest();

            javaTest.setCompany("TCS");
            javaTest.setTitle("Java & OOP Fundamentals");
            javaTest.setCategory("Java");
            javaTest.setDurationMinutes(20);
            javaTest.setDifficulty("Easy");
            javaTest.setDescription(
                    "Practice Core Java and OOP fundamentals."
            );

            TestQuestion q1 = new TestQuestion();

            q1.setQuestionText(
                    "Which keyword prevents a Java class from being inherited?"
            );
            q1.setExplanation(
                    "A final class cannot be extended by another class."
            );

            q1.addOption(createOption("static", false));
            q1.addOption(createOption("final", true));
            q1.addOption(createOption("private", false));
            q1.addOption(createOption("abstract", false));

            javaTest.addQuestion(q1);

            TestQuestion q2 = new TestQuestion();

            q2.setQuestionText(
                    "Which data structure manages function calls?"
            );
            q2.setExplanation(
                    "A stack manages function calls and their execution context."
            );

            q2.addOption(createOption("Queue", false));
            q2.addOption(createOption("Stack", true));
            q2.addOption(createOption("Graph", false));
            q2.addOption(createOption("Hash Table", false));

            javaTest.addQuestion(q2);

            repository.save(javaTest);

            // Test 2: Accenture SQL
            MockTest sqlTest = new MockTest();

            sqlTest.setCompany("Accenture");
            sqlTest.setTitle("SQL & DBMS Basics");
            sqlTest.setCategory("SQL");
            sqlTest.setDurationMinutes(15);
            sqlTest.setDifficulty("Easy");
            sqlTest.setDescription(
                    "Practice SQL queries and database fundamentals."
            );

            TestQuestion q3 = new TestQuestion();

            q3.setQuestionText(
                    "Which SQL clause filters rows before grouping?"
            );
            q3.setExplanation(
                    "WHERE filters rows before GROUP BY is applied."
            );

            q3.addOption(createOption("HAVING", false));
            q3.addOption(createOption("ORDER BY", false));
            q3.addOption(createOption("WHERE", true));
            q3.addOption(createOption("SELECT", false));

            sqlTest.addQuestion(q3);

            repository.save(sqlTest);

            System.out.println(
                    "Sample mock tests inserted successfully!"
            );
        };
    }

    private static TestOption createOption(
            String text, boolean correct) {

        TestOption option = new TestOption();

        option.setOptionText(text);
        option.setCorrect(correct);

        return option;
    }
}
