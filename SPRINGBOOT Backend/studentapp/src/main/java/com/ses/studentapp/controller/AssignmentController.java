package com.ses.studentapp.controller;
import com.ses.studentapp.model.Assignment;
import com.ses.studentapp.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


@RestController
@RequestMapping("/assignment")
public class AssignmentController {
    private final AssignmentService assignmentService;

    @Autowired
    public AssignmentController(AssignmentService assignmentService) { this.assignmentService = assignmentService; }

    @GetMapping("/assignments")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Assignment> getAllAssignments() throws Exception {
        return assignmentService.getAllAssignments();
    }

}
