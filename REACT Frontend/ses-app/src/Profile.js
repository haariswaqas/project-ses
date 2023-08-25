import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './NavBar';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [studentProfiles, setStudentProfiles] = useState(null);

  useEffect(() => {
    // Fetch student profile data from the backend API
    fetch('http://localhost:8080/student/profile') // Update the API endpoint accordingly
      .then((response) => response.json())
      .then((data) => {
        setStudentProfiles(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (!studentProfiles) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
        />
      </Helmet>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-3">
              <img
                src={studentProfiles.profile_pic}
                alt={`${studentProfiles.first_name} ${studentProfiles.last_name}`}
                className="card-img-top"
              />
              <Link to="/dashboard" className="nav-link text-dark">
                {`${studentProfiles.first_name}'s Dashboard`}
              </Link>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                {studentProfiles.middle_name !== null ? (
                  <h5 className="card-title mb-0">{`${studentProfiles.last_name} ${studentProfiles.first_name} ${studentProfiles.middle_name}`}</h5>
                ) : (
                  <h5 className="card-title mb-0">{`${studentProfiles.first_name} ${studentProfiles.last_name}`}</h5>
                )}
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">Student ID</th>
                      <td>{studentProfiles.student_id}</td>
                    </tr>
                    <tr>
                      <th scope="row">Gender</th>
                      <td>{studentProfiles.gender}</td>
                    </tr>
                    <tr>
                      <th scope="row">Department</th>
                      <td>{studentProfiles.department}</td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>{studentProfiles.email}</td>
                    </tr>
                  </tbody>
                </table>
                {/* Render additional details here */}
                <div className="bio">
                  <p>{studentProfiles.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
