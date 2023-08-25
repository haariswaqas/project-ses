package com.ses.studentapp.service;

import com.ses.studentapp.model.Course;

import java.util.List;

public interface CourseService {
    List<Course> getAllCourses() throws Exception;
}
