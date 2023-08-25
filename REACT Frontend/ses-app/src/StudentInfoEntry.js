import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './NavBar';
import './LoginForm.css';

const StudentInfoEntry = () => {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
        />
      </Helmet>
      <Navbar />
      <br />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="text-center">Student Enrollment Form</h2>
            <br />
            <form>
              <input type="hidden" name="csrfmiddlewaretoken" value="your-csrf-token" />

              <div className="mb-3">
                <label htmlFor="student_id" className="form-label">
                  Student ID:
                </label>
                <input type="text" name="student_id" id="student_id" className="form-control" required />
              </div>

              <div className="mb-3">
                <label htmlFor="first_name" className="form-label">
                  First name:
                </label>
                <input type="text" name="first_name" id="first_name" className="form-control" required />
              </div>

              <div className="mb-3">
                <label htmlFor="middle_name" className="form-label">
                  Middle name:
                </label>
                <input type="text" name="middle_name" id="middle_name" className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="last_name" className="form-label">
                  Last name:
                </label>
                <input type="text" name="last_name" id="last_name" className="form-control" required />
              </div>

              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender:
                </label>
                <select name="gender" id="gender" className="form-select" required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="date_of_birth" className="form-label">
                  Date of birth:
                </label>
                <input type="date" name="date_of_birth" id="date_of_birth" className="form-control" required />
              </div>

              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age:
                </label>
                <input type="number" name="age" id="age" className="form-control" min="0" required />
              </div>

              <div className="mb-3">
                <label htmlFor="shs" className="form-label">
                  SHS:
                </label>
                <input type="text" name="shs" id="shs" className="form-control" required />
              </div>

              <div className="mb-3">
                <label htmlFor="bio" className="form-label">
                  Bio:
                </label>
                <textarea name="bio" id="bio" className="form-control" rows="4" />
              </div>

              <div className="mb-3">
                <label htmlFor="department_id" className="form-label">
                  Department:
                </label>
                <select name="department_id" id="department_id" className="form-select">
                  {/* Render departments dynamically */}
                  <option value="department_id_1">Computer Engineering (CPEN)</option>
                  <option value="department_id_2">Biomedical Engineering (BMEN)</option>
                  <option value="department_id_3">Agricultural Engineering (AREN)</option>
                  <option value="department_id_3">Food Process Engineering (FPEN)</option>
                  <option value="department_id_3">Materials Science & Engineering (MTEN)</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="admission_year" className="form-label">
                  Admission year:
                </label>
                <input type="number" name="admission_year" id="admission_year" className="form-control" min="2000" max="2099" required />
              </div>

              <div className="mb-3">
                <label htmlFor="level_id" className="form-label">
                  Level:
                </label>
                <select name="level_id" id="level_id" className="form-select">
                  {/* Render levels dynamically */}
                  <option value="level_id_1">Level 100</option>
                  <option value="level_id_2">Level 200</option>
                  <option value="level_id_3">Level 300</option>
                  <option value="level_id_4">Level 400</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="phone_number" className="form-label">
                  Phone number:
                </label>
                <input type="tel" name="phone_number" id="phone_number" className="form-control" required />
              </div>

              <div className="text-center">
                <button type="submit" className="login-button">
                  Enroll
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfoEntry;
