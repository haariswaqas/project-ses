import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsLoggedOut(true);
  };

  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
        />
        {/* Include the following scripts */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.10.2/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/js/bootstrap.bundle.min.js"></script>
      </Helmet>

      <style>
      {`
          /* Custom styles for the dark-themed navbar */
          .navbar {
            background-color: #333; /* Dark background */
          }
          .navbar-brand {
            font-size: 1.5rem;
            font-weight: bold;
            color: #fff; /* White text color */
          }
          .navbar .nav-item .nav-link {
            color: #fff; /* White text color for links */
          }
          .navbar .nav-item .nav-link:hover {
            color: #fff; /* Keep the same color on hover */
          }
          .navbar .dropdown-toggle {
            color: #fff; /* White text color for dropdown toggle */
          }
          .navbar .dropdown-item {
            color: #000000; /* White text color for dropdown items */
          }
          .navbar .dropdown-item:hover {
            color: #000000; /* Light gray text color on dropdown item hover */
          }
          .navbar .btn-outline-light {
            color: #fff; /* White text color for outline buttons */
            border-color: #fff; /* White border color for outline buttons */
          }
          .navbar .btn-outline-light:hover {
            color: #fff; /* Keep white text color on hover */
            background-color: transparent; /* Remove background color on hover */
          }
        `}
      </style>

      {!isLoggedOut && (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
          <Link className="navbar-brand text-white me-5" to="/homepage">
            <strong>School of Engineering Sciences - UG</strong>
          </Link>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                {/* New dropdowns */}
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle me-5" to="#" id="dashboardDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    DASHBOARD
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="dashboardDropdown">
                    {/* Add Profile option */}
                    <li><Link className="dropdown-item" to="/student_profile">Profile</Link></li>
                    <li><Link className="dropdown-item" to="/assignments">Assignments</Link></li>
                    <li><Link className="dropdown-item" to="/projects">Projects</Link></li>
                    <li><Link className="dropdown-item" to="/labs">Labs</Link></li>
                    <li><Link className="dropdown-item" to="/results">Records/Results</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle me-5" to="#" id="scheduleDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SCHEDULE
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="scheduleDropdown">
                    <li><Link className="dropdown-item" to="/timetable">Class Timetable</Link></li>
                    <li><Link className="dropdown-item" to="/exams">Exam Timetable</Link></li>
                    <li><Link className="dropdown-item" to="/fees">Fees Payment</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle me-5" to="#" id="coursesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    COURSES
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                    <li><Link className="dropdown-item" to="/course_list">View Courses</Link></li>
                    <li><Link className="dropdown-item" to="/course_registration">Course Registration</Link></li>
                    <li><Link className="dropdown-item" to="/lecturer_list">Course Instructors</Link></li>
                  </ul>
                </li>
              </ul>
              {isLoggedIn && (
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link to="/logout" className="btn btn-outline-light me-2" onClick={handleLogout}>
                      Logout
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      )}

      {isLoggedOut && (
        <div className="container mt-3">
          <div className="alert alert-info" role="alert">
            You have been logged out.
            <br />
            <Link to="/login" className="me-2">
              Login again
            </Link>
            or
            <Link to="/registration" className="ms-2">
              Create a new account
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
