package com.ses.studentapp.service;

import com.ses.studentapp.model.Student;
import com.ses.studentapp.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public boolean authenticateStudent(String studentId, String password) {
        Student student = studentRepository.findByStudentIdAndPassword(studentId, password)
                .orElse(null);
        return student != null;
    }
}
