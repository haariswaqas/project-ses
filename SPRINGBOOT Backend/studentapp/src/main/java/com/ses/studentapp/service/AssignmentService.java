package com.ses.studentapp.service;
import com.ses.studentapp.model.Assignment;

import java.util.List;


public interface AssignmentService {
    List<Assignment> getAllAssignments() throws Exception;
}

