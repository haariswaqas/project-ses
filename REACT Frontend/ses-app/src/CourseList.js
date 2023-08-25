import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './NavBar';
import './Dashboard.css';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:8080/course/courses'); // Replace with your backend API URL
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
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
        <h1 className="mt-5">SES Courses</h1>
        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">COURSE CODE</th>
              <th scope="col">COURSE TITLE</th>
              <th scope="col">CREDIT</th>
              <th scope="col">COURSE TYPE</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.courseCode}</td>
                <td>{course.courseTitle}</td>
                <td>{course.creditHours}</td>
                <td>{course.courseType}</td> {/* Add this line to display the GRADE */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseList;
