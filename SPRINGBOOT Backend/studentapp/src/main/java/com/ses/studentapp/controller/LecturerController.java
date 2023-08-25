package com.ses.studentapp.controller;

import com.ses.studentapp.model.Lecturer;
import com.ses.studentapp.service.LecturerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/lecturer")
public class LecturerController {


    private final LecturerService lecturerService;

    @Autowired
    public LecturerController(LecturerService lecturerService) { this.lecturerService = lecturerService; }

    @GetMapping("/lecturers")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Lecturer> getAllLecturers() throws Exception {
        return lecturerService.getAllLecturers();
    }
    }

