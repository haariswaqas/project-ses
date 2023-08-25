import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NavBar2 from './NavBar2';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sex, setSex] = useState('');
  const [studentId, setStudentId] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    }

    const payload = {
      firstName,
      middleName,
      lastName,
      sex,
      studentId,
      department,
      email,
      password,
    };

    fetch('http://localhost:8080/student/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response:', data);

        setFirstName('');
        setMiddleName('');
        setLastName('');
        setSex('');
        setStudentId('');
        setDepartment('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setIsRegistered(true);
        setPasswordMismatch(false);

        const { firstName, lastName, studentId, department } = data;
        setSuccessMessage(
          `${firstName} ${lastName} - ${studentId} has registered at SES as a ${department} student.`
        );
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
        />
      </Helmet>
      {!isRegistered ? (
        <>
          <NavBar2 />
          <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="login-container w-75"> {/* Increase the width using w-75 class */}
              <h2 className="login-title">Student Registration</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="firstName" className="login-label">
                    First Name:
                  </label>
                  <input
                    type="text"
                    className="form-control login-input"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="middleName" className="login-label">
                    Middle Name:
                  </label>
                  <input
                    type="text"
                    className="form-control login-input"
                    id="middleName"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="lastName" className="login-label">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    className="form-control login-input"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="sex" className="login-label">
                    Sex:
                  </label>
                  <select
                    className="form-control login-input"
                    id="sex"
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    required
                  >
                    <option value="">Select Sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="studentId" className="login-label">
                    Student ID:
                  </label>
                  <input
                    type="text"
                    className="form-control login-input"
                    id="studentId"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="department" className="login-label">
                    Department:
                  </label>
                  <select
                    className="form-control login-input"
                    id="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="Computer Engineering (CPEN)">Computer Engineering (CPEN)</option>
                    <option value="Agricultural Engineering (AREN)">Agricultural Engineering (AREN)</option>
                    <option value="Biomedical Engineering (BMEN)">Biomedical Engineering (BMEN)</option>
                    <option value="Materials Science & Engineering (MTEN)">Materials Science & Engineering (MTEN)</option>
                    <option value="Food Process Engineering (FPEN)">Food Process Engineering (FPEN)</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="login-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control login-input"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password" className="login-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control login-input"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="confirmPassword" className="login-label">
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    className={`form-control login-input ${
                      passwordMismatch ? 'is-invalid' : ''
                    }`}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  {passwordMismatch && (
                    <div className="invalid-feedback">Passwords do not match.</div>
                  )}
                </div>
                <button type="submit" className="login-button">
                  Register
                </button>
                <div className="mt-2">
                  <p>Already have an account?</p>
                  <Link to="/login" className="btn btn-primary">
                    Sign In!
                  </Link>
                </div>
                <div className="mt-2">
                  <Link to="/" className="btn btn-secondary">
                    Back to Homepage
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="login-container">
            <h2 className="login-title">Registration Successful!</h2>
            <p>{successMessage}</p>
            <p>
              Click{' '}
              <Link to="/login" className="login-link">
                here
              </Link>{' '}
              to proceed to the login form.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
