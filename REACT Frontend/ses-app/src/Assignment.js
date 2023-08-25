import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './Dashboard.css';
import Navbar from './NavBar';

const Assignment = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await fetch('http://localhost:8080/assignment/assignments'); // Replace with your backend API URL
      const data = await response.json();
      setAssignments(data);
    } catch (error) {
      console.error('Error fetching assignments:', error);
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
      <Navbar />/


      <div className="container mt-4">
        <h1 className="mt-5 text-center">Assignments</h1>
        {assignments.map((assignment) => (
          <div key={assignment.id} className="card mb-4">
            <div className="card-header">
              <h5 className="card-title">{assignment.course.courseCode} - {assignment.course.courseTitle}</h5>
            </div>
            <div className="card-body">
              
              <div className="assignment-content mb-3">
                <h6 className="mb-2"> ASSIGNMENT {assignment.hwNumber}</h6>
                <p>{assignment.content}</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className="mb-1"><strong>Date Assigned: </strong> {assignment.assignedOn}</p>
                  <p className="mb-1"> <strong>Due: </strong> {assignment.dueDate}</p>
                </div>
                <div className="col-md-6">
                  <p className="mb-1"> <strong> Assigned By: </strong> {assignment.lecturer.title} {assignment.lecturer.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignment;
