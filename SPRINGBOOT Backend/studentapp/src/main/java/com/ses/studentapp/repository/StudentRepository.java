package com.ses.studentapp.repository;

import com.ses.studentapp.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    Optional<Student> findByStudentIdAndPassword(String studentId, String password);

    Optional<Student> findByStudentId(String studentId);
}
