package com.placement.placeprep.attempt;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TestAttemptRepository
        extends JpaRepository<TestAttempt, Long> {

    List<TestAttempt> findAllByOrderBySubmittedAtDesc();
}
