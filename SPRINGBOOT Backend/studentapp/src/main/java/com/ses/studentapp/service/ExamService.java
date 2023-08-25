package com.ses.studentapp.service;
import com.ses.studentapp.model.Assignment;
import com.ses.studentapp.model.Exam;

import java.util.List;

public interface ExamService {
    List<Exam> getAllExams() throws Exception;
}
