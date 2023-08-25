import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import HomePage2 from './HomePage2';
import HomePage from './HomePage';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Navbar from './NavBar';
import Profile from './Profile';
import StudentInfoEntry from './StudentInfoEntry';
import CourseList from './CourseList';
import LecturerList from './LecturerList';
import TimeTable from './TimeTable';
import LogoutPage from './LogoutPage';
import Assignment from './Assignment';
import Dashboard from './Dashboard';
import Project from './Project';
import Lab from './Lab';
import Result from './Result';
import Exam from './Exam';
import CourseRegistration from './CourseRegistration';
import FeesPayment from './FeesPayment';
import NavBar2 from './NavBar2';

function App() {
  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<HomePage2 />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/student_profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assignments" element={<Assignment />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/labs" element={<Lab />} />
          <Route path="/results" element={<Result />} />
          <Route path="/exams" element={<Exam />} />
          <Route path="/course_registration" element={<CourseRegistration />} />

          <Route path="/student_info_entry" element={<StudentInfoEntry />} />
          <Route path="/course_list" element={<CourseList />} />
          <Route path="/lecturer_list" element={<LecturerList />} />
          <Route path="/timetable" element={<TimeTable />} />
          <Route path="/fees" element={<FeesPayment />} />
          <Route path="/navbar2" element={<NavBar2 />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
     
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
