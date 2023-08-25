package com.ses.studentapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ses.studentapp.model.Result;

@Repository
public interface ResultRepository extends JpaRepository<Result, Long> {
    // You can add custom query methods here if needed
}
