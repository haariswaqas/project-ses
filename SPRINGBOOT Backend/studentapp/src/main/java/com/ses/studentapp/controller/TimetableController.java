package com.ses.studentapp.controller;
import com.ses.studentapp.model.Timetable;
import com.ses.studentapp.service.TimetableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/timetable")
public class TimetableController {

    private final TimetableService timetableService;

    @Autowired
    public TimetableController(TimetableService timetableService) { this.timetableService = timetableService; }

    @GetMapping("/timetables")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Timetable> getAllTimetables() throws Exception {
        return timetableService.getAllTimetables();
    }

}
