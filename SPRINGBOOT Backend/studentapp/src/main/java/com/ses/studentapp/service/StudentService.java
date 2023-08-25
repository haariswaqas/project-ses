package com.ses.studentapp.service;

import com.ses.studentapp.model.Student;

public interface StudentService {
    Student saveStudent(Student student);
    boolean authenticateStudent(String studentId, String password);
}
