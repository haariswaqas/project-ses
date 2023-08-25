package com.ses.studentapp.service;

import com.ses.studentapp.model.Course;
import com.ses.studentapp.model.Lecturer;

import java.util.List;

public interface LecturerService {

    List<Lecturer> getAllLecturers() throws Exception;
}
