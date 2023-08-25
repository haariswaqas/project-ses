package com.ses.studentapp.service;
import com.ses.studentapp.model.Timetable;
import com.ses.studentapp.repository.TimetableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TimetableServiceImpl implements TimetableService {

    private final TimetableRepository timetableRepository;

    @Autowired
    public TimetableServiceImpl(TimetableRepository timetableRepository) {
        this.timetableRepository = timetableRepository;
    }



    @Override
    public List<Timetable> getAllTimetables() {
        return timetableRepository.findAll();
    }
}
