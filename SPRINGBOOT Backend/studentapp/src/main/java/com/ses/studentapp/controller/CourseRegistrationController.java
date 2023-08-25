package com.ses.studentapp.controller;


import com.ses.studentapp.model.CourseRegistration;
import com.ses.studentapp.service.CourseRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/course_registration")

public class CourseRegistrationController {

   private final CourseRegistrationService courseRegistrationService;

   @Autowired
    public CourseRegistrationController(CourseRegistrationService courseRegistrationService) { this.courseRegistrationService = courseRegistrationService; }

    @GetMapping("/course_registrations")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<CourseRegistration> getAllCourseRegistrations() throws Exception {
       return courseRegistrationService.getAllCourseRegistrations();
    }

}