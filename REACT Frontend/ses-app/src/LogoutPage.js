import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './LogoutPage.css'; // Assuming you have a separate CSS file for the component

const LogoutPage = () => {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.10.2/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/js/bootstrap.bundle.min.js"></script>
      </Helmet>

      <div className="container mt-5">
        <div className="alert alert-info custom-alert" role="alert">
          You have logged out.
          <br />
          <Link to="/login" className="btn btn-primary me-2">
            Login again
          </Link>
          <Link to="/registration" className="btn btn-success ms-2">
            Create a new account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
