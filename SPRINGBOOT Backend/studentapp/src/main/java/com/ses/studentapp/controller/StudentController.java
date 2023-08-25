package com.ses.studentapp.controller;

import com.ses.studentapp.model.Student;
import com.ses.studentapp.model.StudentLoginRequest;
import com.ses.studentapp.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:3000") // Replace with your frontend URL
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public Student add(@RequestBody Student student) {
        return studentService.saveStudent(student);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody StudentLoginRequest loginRequest) {
        // Get the student ID and password from the request
        String studentId = loginRequest.getStudentId();
        String password = loginRequest.getPassword();

        // Call the authenticateStudent method to check if the student exists
        boolean isAuthenticated = studentService.authenticateStudent(studentId, password);

        if (isAuthenticated) {
            return ResponseEntity.ok().body("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid student ID or password");
        }
    }
}
