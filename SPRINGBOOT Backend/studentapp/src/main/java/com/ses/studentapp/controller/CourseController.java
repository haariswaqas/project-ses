package com.ses.studentapp.controller;

import com.ses.studentapp.model.Course;
import com.ses.studentapp.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/course")
public class CourseController {
    private final CourseService courseService;

    @Autowired
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/courses")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Course> getAllCourses() throws Exception {
        return courseService.getAllCourses();
    }
}

