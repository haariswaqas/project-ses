package com.ses.studentapp.controller;
import com.ses.studentapp.model.Project;
import com.ses.studentapp.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/project")
public class ProjectController {

    private ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) { this.projectService = projectService; }

    @GetMapping("/projects")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Project> getAllProjects() throws Exception {
        return projectService.getAllProjects();
    }
}
