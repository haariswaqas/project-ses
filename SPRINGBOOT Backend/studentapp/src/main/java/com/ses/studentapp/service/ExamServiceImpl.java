package com.ses.studentapp.service;
import com.ses.studentapp.model.Exam;
import com.ses.studentapp.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class ExamServiceImpl implements ExamService {

    private final ExamRepository examRepository;

    @Autowired
    public ExamServiceImpl(ExamRepository examRepository) {
        this.examRepository = examRepository;


    }

    @Override
    public List<Exam> getAllExams() { return examRepository.findAll(); }
}
