package com.ses.studentapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ses.studentapp.model.Assignment;

public interface AssignmentRepository extends JpaRepository<Assignment, Long>{
}
