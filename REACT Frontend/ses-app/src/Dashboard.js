import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './NavBar';
import './Dashboard.css';
import Assignment from './Assignment';

function Dashboard() {
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
      <h1 className="mt-5">Welcome to the Student Dashboard</h1>
      <p>Here, you can access various features and information related to your student profile.</p>

      {/* Add your desired content and components for the student dashboard */}

      <Assignment />   
      <div className="mt-5">
        <h2>Upcoming Projects</h2>
        <ul className="list-group">
          <li className="list-group-item">Linear Circuits Final Project</li>
          <li className="list-group-item">Data Communications Final Project</li>
          <li className="list-group-item">Software Engineering Project 1, Due 10th June, 2023</li>
          <li className="list-group-item">Software Engineering Project 2, Due TBD</li>
          <li className="list-group-item">Software Engineering Project 3, Due TBD</li>
        </ul>
      </div>



      <div className="mt-5">
        <h2>COURSES OFFERED/GRADES</h2>
        <table>
  <tr>
    <th>COURSE CODE</th>
    <th>COURSE TITLE</th>
    <th>CREDIT</th>
    <th>GRADE</th>
  </tr>
  <tr>
    <td>SENG 101</td>
    <td>Calculus 1: Single Variable</td>
    <td>4</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>SENG 103</td>
    <td>Mechanics 1: Statics</td>
    <td>3</td>
    <td>D</td>
  </tr>
  <tr>
    <td>SENG 105</td>
    <td>Engineering Graphics (CAD)</td>
    <td>3</td>
    <td>B+</td>
  </tr>
  <tr>
    <td>SENG 107</td>
    <td>Intro to Engineering.</td>
    <td>2</td>
    <td>D+</td>
  </tr>
  <tr>
    <td>CPEN 103</td>
    <td>Computer Engineering Innovations</td>
    <td>3</td>
    <td>A</td>
  </tr>
  <tr>
    <td>UGRC 110</td>
    <td>Academic Writing 1</td>
    <td>3</td>
    <td>B</td>
  </tr>
  <tr>
    <td>SENG 111</td>
    <td>General Physics</td>
    <td>3</td>
    <td>F</td>
  </tr>
  <tr>
    <td>SENG 108</td>
    <td>Basic Electronics</td>
    <td>3</td>
    <td>C</td>
  </tr>
  <tr>
    <td>SENG 106</td>
    <td>Applied Electricity</td>
    <td>3</td>
    <td>D</td>
  </tr>
  <tr>
    <td>SENG 104</td>
    <td>Mechanics 2: Dynamics</td>
    <td>3</td>
    <td>F</td>
  </tr>
  <tr>
    <td>UGRC 150</td>
    <td>Critical Thinking &amp; Practical Reasoning</td>
    <td>3</td>
    <td>B-</td>
  </tr>
  <tr>
    <td>CPEN 104</td>
    <td>Engineering Design</td>
    <td>3</td>
    <td>C+</td>
  </tr>
  <tr>
    <td>SENG 102</td>
    <td>Calculus 2: Multivariable</td>
    <td>4</td>
    <td>A</td>
  </tr>
  <tr>
    <td>SENG 112</td>
    <td>Engineering Computational Tools</td>
    <td>3</td>
    <td>D+</td>
  </tr>
</table>



      </div>
      </div>
    </div>
  );
}

export default Dashboard;
