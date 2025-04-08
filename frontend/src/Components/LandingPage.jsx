import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./LandingPage.css"; // <- custom styles here

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column full-height bg-success no-scroll">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white py-3 border-bottom">
        <div className="container-fluid px-4">
          <a className="navbar-brand text-success fw-bold" href="/">
            logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center">
              <li className="nav-item mx-2">
                <a className="nav-link text-success" href="#">
                  About 
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-success" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item ms-3">
                <button
                  className="btn btn-success rounded-pill px-4 py-2"
                  onClick={() => navigate("/login")}
                >
                  Join Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-grow-1 w-100 bg-success text-white d-flex align-items-center">
        <div className="container-fluid px-5">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h1 className="fw-bold display-4">Glory Bible Church</h1>
              <p className="mt-3 fs-5">
                Welcome to a place of worship and growth. <br />
                We’re so glad you’re here. Join us in prayer, in <br />
                love, and in fellowship as we walk this journey of <br />
                faith together.
              </p>
              <button
                className="btn btn-light text-success fw-bold px-4 py-2 rounded-pill mt-3"
                onClick={() => navigate("/login")}
              >
                Get Started
              </button>
            </div>

            {/* Right Placeholder */}
            <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
              <div>
                <img 
                  src="path_to_your_logo_image.png" 
                  alt="Glory Bible Church Logo" 
                  className="img-fluid" 
                  style={{ maxWidth: "100%", maxHeight: "100%" }} 
                />
              </div>
            </div>
          </div>
        </div>
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

export default LandingPage;