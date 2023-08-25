package com.ses.studentapp.service;

import com.ses.studentapp.model.Lecturer;

import com.ses.studentapp.repository.LecturerRepository;
import com.ses.studentapp.service.LecturerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LecturerServiceImpl implements LecturerService {

    private final LecturerRepository lecturerRepository;

    @Autowired
    public LecturerServiceImpl(LecturerRepository lecturerRepository) {
        this.lecturerRepository = lecturerRepository; }


    @Override
    public List<Lecturer> getAllLecturers()  {
        return lecturerRepository.findAll();
    }
}
