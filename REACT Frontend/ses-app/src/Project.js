
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './NavBar'; // Make sure to update the path to the Navbar component

const Project = () => {
const [projects, setProjects] = useState([]);

useEffect(() => {
  fetchProjects();

}, []);

const fetchProjects = async () => {
  try {
    const response = await fetch('http://localhost:8080/project/projects');
    const data = await response.json();
    setProjects (data);
  }
  catch(error) {
    console.error("Error fetching projects", error);
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
        <h1 className="mt-5 text-center">PROJECTS</h1>
        <br></br>
        {projects.map((project) => (
          <div key={project.id} className="card mb-4">
            <div className="card-header">
              <h5 className="card-title">{project.course.courseCode} - {project.course.courseTitle}</h5>
            </div>
            <div className="card-body">
              
              <div className="assignment-content mb-3">
                <h6 className="mb-2"> PROJECT {project.projectNumber}</h6>
                <h6 className="mb-2">{project.projectType} Project</h6>
                <p>{project.content}</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className="mb-1"><strong>Date Assigned: </strong> {project.assignedOn}</p>
                  <p className="mb-1"> <strong>Due: </strong> {project.dueDate}</p>
                
                </div>
                <div className="col-md-6">
                  <p className="mb-1"> <strong> Assigned By: </strong> {project.lecturer.title} {project.lecturer.name}</p>
                  <p className="mb-1"> <strong> Department: </strong> {project.lecturer.department}</p>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default Project;
