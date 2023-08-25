import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './Dashboard.css';
import Navbar from './NavBar';

const CourseRegistration = () => {
  const [courseRegistrations, setCourseRegistrations] = useState([]);

  useEffect(() => {
    fetchCourseRegistrations();
  }, []);

  const fetchCourseRegistrations = async () => {
    try {
      const response = await fetch('http://localhost:8080/course_registration/course_registrations');
      const data = await response.json();
      setCourseRegistrations(data);
    } catch (error) {
      console.error('Error fetching course registrations:', error);
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

      <div className="container mt-4">
        <h1 className="mt-5 text-center">Course Registrations</h1>
        {courseRegistrations.map((courseRegistration) => (
          <div key={courseRegistration.id} className="card mb-4">
            <div className="card-header">
              <h5 className="card-title">
                {courseRegistration.course.courseCode} - {courseRegistration.course.courseTitle}
              </h5>
            </div>
            <div className="card-body">
              <p>Student: {courseRegistration.student.name}</p>
              <p>Registered: {courseRegistration.registered ? 'Yes' : 'No'}  </p>
              {/* You can add more card-body content here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseRegistration;
