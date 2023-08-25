import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './NavBar'; // Make sure to update the path to the Navbar component

const Lab = () => {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
        />
      </Helmet>
      <Navbar />
      <div className="container mt-4">
        <h1>To be built later</h1>
        <p>This page will be put up soon. Please check back later.</p>
      </div>
    </div>
  );
}

export default Lab;
