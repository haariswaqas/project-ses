package com.ses.studentapp.controller;

import com.ses.studentapp.model.Result;
import com.ses.studentapp.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/result")
public class ResultController {

    private final ResultService resultService;

    @Autowired
    public ResultController(ResultService resultService) {
        this.resultService = resultService;
    }

    @GetMapping("/results")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Result> getAllResults() throws Exception {
        return resultService.getAllResults();
    }

}
