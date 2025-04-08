import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

import "./AllTeachings.css"; // Import your CSS file

function AllTeachings() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar (Horizontal) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-success border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand text-white fw-bold" to="/Home">
            <span className="text-white">G</span>BC
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/Home" className="nav-link text-white">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/Give" className="nav-link text-white">Give</Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/" className="nav-link text-success">LiveStream</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid py-5 flex-grow-1">
        <section id="all-teachings-page">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center mb-4">All Teachings</h2>
                <div className="row video-all-container">
                  <div className="col-md-3 mb-4">
                    <video controls className="w-100">
                      <source src="/vids/1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="col-md-3 mb-4">
                    <video controls className="w-100">
                      <source src="/vids/2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="col-md-3 mb-4">
                    <video controls className="w-100">
                      <source src="/vids/3.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="col-md-3 mb-4">
                    <video controls className="w-100">
                      <source src="/vids/4.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white text-success py-2 border-top mt-auto small">
        <div className="container text-center text-md-start">
          <div className="row">
            {/* Church Info */}
            <div className="col-md-4 mb-2">
              <h6 className="fw-bold mb-1">Glory Bible Church</h6>
              <p className="mb-1">123 Faith Ave, Hope City</p>
              <p className="mb-0">info@glorybiblechurch.org | (123) 456-7890</p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-2">
              <h6 className="fw-bold mb-1">Quick Links</h6>
              <ul className="list-unstyled mb-0">
                <li><a href="#" className="text-success text-decoration-none">Home</a></li>
                <li><a href="#" className="text-success text-decoration-none">Services</a></li>
                <li><a href="#" className="text-success text-decoration-none">Events</a></li>
                <li><a href="#" className="text-success text-decoration-none">Contact</a></li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="col-md-4 mb-2 text-md-end text-center">
              <h6 className="fw-bold mb-1">Follow Us</h6>
              <div className="d-flex justify-content-md-end justify-content-center gap-2">
                <a href="#" className="text-success"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-success"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-success"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>

          <hr className="my-2" />
          <div className="text-center">
            &copy; {new Date().getFullYear()} Glory Bible Church
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AllTeachings;
