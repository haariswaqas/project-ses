package com.ses.studentapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ses.studentapp.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    // You can add custom query methods here if needed
}
