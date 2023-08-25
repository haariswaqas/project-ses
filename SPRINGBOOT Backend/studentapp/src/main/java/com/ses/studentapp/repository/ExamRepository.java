package com.ses.studentapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ses.studentapp.model.Exam;

public interface ExamRepository extends JpaRepository<Exam, Long>{
}
