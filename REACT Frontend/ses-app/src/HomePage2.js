import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar2 from './NavBar2';

function HomePage2() {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
        />
      </Helmet>
      <NavBar2 />
      <br></br>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1>Welcome to the School of Engineering Sciences!</h1>
            <p>
              We are committed to providing quality education to our students, equipping them with the skills and knowledge they need to succeed in their careers.
            </p>
            <p>
              Our faculty is made up of experienced professionals who are passionate about teaching and research, and who work hard to ensure that our curriculum is up-to-date and relevant to the needs of the industry.
            </p>
            <p>
              At the School of Engineering Sciences, we offer a range of programs in various engineering fields, including civil, mechanical, electrical, and computer engineering. Our programs are designed to provide students with a strong foundation in the fundamentals of engineering, as well as hands-on experience through lab work and projects.
            </p>
            <p>
              Whether you are a current student, a prospective student, or just interested in learning more about the field of engineering, we invite you to explore our website and learn more about what we have to offer.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="https://pbs.twimg.com/media/FltfF-rX0AAHfiu.jpg" alt="Students in a laboratory" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <img src="https://pbs.twimg.com/media/FmBq_0bWAAIFxNW.jpg" alt="Students in a laboratory" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Add Bootstrap JS */}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
}

export default HomePage2
