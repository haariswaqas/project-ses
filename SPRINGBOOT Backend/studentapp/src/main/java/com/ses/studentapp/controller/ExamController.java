package com.ses.studentapp.controller;
import com.ses.studentapp.model.Assignment;
import com.ses.studentapp.model.Exam;
import com.ses.studentapp.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/exam")
public class ExamController {

    private final ExamService examService;

    @Autowired
    public ExamController(ExamService examService) {this.examService = examService; }

    @GetMapping("exams")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Exam> getAllExams() throws Exception {
        return examService.getAllExams();
    }



}
