import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './NavBar';
import './Dashboard.css';

const LecturerList = () => {
  const [lecturers, setLecturers] = useState([]);

  useEffect(() => {
    fetchLecturers();
  }, []);

  const fetchLecturers = async () => {
    try {
      const response = await fetch('http://localhost:8080/lecturer/lecturers'); // Replace with your backend API URL
      const data = await response.json();
      setLecturers(data);
    } catch (error) {
      console.error('Error fetching lecturers:', error);
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
        <h1 className="mt-5">SES Lecturers</h1>
        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">TITLE</th>
              <th scope="col">NAME</th>
              <th scope="col">DEPARTMENT</th>
              <th scope="col">PHONE</th>
              <th scope="col">EMAIL</th>
            </tr>
          </thead>
          <tbody>
            {lecturers.map((lecturer) => (
              <tr key={lecturer.id}>
                <td>{lecturer.title}</td>
                <td>{lecturer.name}</td>
                <td>{lecturer.department}</td>
                <td>{lecturer.phone}</td>
                <td>{lecturer.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LecturerList;
