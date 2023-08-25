import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './Dashboard.css';
import Navbar from './NavBar';

const Result = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const response = await fetch('http://localhost:8080/result/results'); // Replace with your backend API URL
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error fetching results:', error);
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
        <h1 className="mt-5 text-center">Student Records</h1>

        {/* Display student's information */}
        <div className="student-info mb-4">
          {results.length > 0 && (
            <>
              <h4><strong>Student Name:</strong> {results[0].student.firstName} {results[0].student.middleName} {results[0].student.lastName}</h4>
              <h5><strong>Student ID:</strong> {results[0].student.studentId}</h5>
              <p><strong>Sex:</strong> {results[0].student.sex}</p>
              {results[0].student.cgpa !== null && (
                <p><strong>CGPA:</strong> {results[0].cgpa}</p>
              )}
            </>
          )}
        </div>

        {/* Display results in a table */}
        <table className="table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Grade</th>
              <th>GPT</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id}>
                <td>{result.course.courseCode}</td>
                <td>{result.course.courseTitle}</td>
                <td>{result.grade}</td>
                <td>{result.gpt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Result;
