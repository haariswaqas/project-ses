import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './NavBar';
import './Dashboard.css';

const Exam = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await fetch('http://localhost:8080/exam/exams'); // Backend API URL
      const data = await response.json();
      setExams(data);
    } catch (error) {
      console.error('Error fetching exam timetable:', error);
    }
  };

  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
        />
      </Helmet>
      <Navbar />

      <div className="container">
        <h1 className="mt-5 dark">SES Examination Timetable</h1>

        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">EXAM</th>
              <th scope="col">EXAM HALL/ROOM</th>
              <th scope="col">DATE</th>
              <th scope="col">EXAMINER</th>
              <th scope="col">TIME</th>
              <th scope="col">DURATION</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr key={exam.id}>
                <td>{exam.course?.courseCode} - {exam.course?.courseTitle}</td>
                <td>{exam.room}</td>
                <td>{exam.date}</td>
                <td>{exam.lecturer.title} {exam.lecturer.name}</td>
                <td>{exam.startTime}</td>
                <td>{exam.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exam;
