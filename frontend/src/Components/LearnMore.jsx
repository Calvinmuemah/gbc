import React from "react";
import { Link } from "react-router-dom";

const SundayService = () => {
  return (
    <>
      {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm sticky-top">
        <div className="container-fluid px-4">
            <Link className="navbar-brand fw-bold" to="/">Glory Bible Church</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/SundayService">Sunday Service</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>


      {/* Main Content */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold text-success">Sunday Service</h1>
            <p className="text-muted">Worship with us every Sunday at Glory Bible Church</p>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <h4 className="text-success">📍 Location & Time</h4>
              <p className="mb-1"><strong>Time:</strong> Sundays at 11:00 AM</p>
              <p className="mb-1"><strong>Venue:</strong> Kamadep Guest House</p>
              <p><strong>Midweek Services:</strong> At Beulah Bookshop</p>

              <div className="my-3">
                <iframe
                  title="Church Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4180631762522!2d34.000000!3d-1.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMSDCsDAwJzAwLjAiUyAzNMKwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1712672500000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="/imgs/prayer meeting.jpg"
                alt="Sunday Service Worship"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>

          <div className="mb-5">
            <h4 className="text-success">🙏 What to Expect</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Welcoming and friendly environment</li>
              <li className="list-group-item">Uplifting praise and worship</li>
              <li className="list-group-item">Bible-based teachings</li>
              <li className="list-group-item">Fellowship and prayer</li>
              <li className="list-group-item">Children’s ministry available</li>
            </ul>
          </div>

          <div className="mb-5">
            <h4 className="text-success">🙋‍♂️ First-Time Visiting?</h4>
            <p>We can’t wait to meet you! Feel free to come as you are. You’ll be greeted by friendly faces and helped with anything you need.</p>
          </div>

          <div className="text-center">
            <h5 className="fw-bold mb-3">Have Questions?</h5>
            <a href="/Contact" className="btn btn-success px-4 py-2">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-success text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-1">&copy; {new Date().getFullYear()} Glory Bible Church</p>
          <p className="small">Kamadep Guest House, Kenya | Sunday Service at 11:00 AM</p>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="mailto:info@glorybiblechurch.org" className="text-white">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SundayService;
