import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function NavBar2() {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
        />
      </Helmet>

      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <Link className="navbar-brand text-white me-3" to="/">
            <strong>School of Engineering Sciences - UG</strong>
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="btn btn-outline-light me-2" to="/registration">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-light me-2" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar2;
