import React, { useState } from 'react';
import NavBar2 from './NavBar2';
import './RegistrationForm.css';
import { Link } from 'react-router-dom';


const LoginForm = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/student/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentId, password }),
      });

      if (response.ok) {
        setError('');
        setStudentId('');
        setPassword('');
        setIsLoggedIn(true);
      } else {
        const errorResponse = await response.text();
        setError(errorResponse);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      {!isLoggedIn && <NavBar2 />}
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="login-container">
          <h2 className="login-title">Student Login</h2>
          {error && <p className="error-message">{error}</p>}
          {isLoggedIn ? (
            <div>
              <h2 className="login-title">Login Successful!</h2>
              <Link to="/homepage" className="login-link">
                My Homepage
              </Link>
            </div>
          ) : (
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="studentId" className="login-label">
                  Student ID:
                </label>
                <input
                  type="text"
                  className="form-control login-input"
                  id="studentId"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="login-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control login-input"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
