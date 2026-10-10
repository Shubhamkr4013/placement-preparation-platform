
package com.placement.placeprep.test;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface MockTestRepository
        extends JpaRepository<MockTest, Long> {

    List<MockTest> findAllByOrderByCompanyAscTitleAsc();

    @Query("""
        SELECT DISTINCT t
        FROM MockTest t
        LEFT JOIN FETCH t.questions
        WHERE t.id = :id
        """)
    Optional<MockTest> findByIdWithQuestions(
            @Param("id") Long id
    );
}
