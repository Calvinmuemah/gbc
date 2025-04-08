import React from 'react';
import { Link } from 'react-router-dom';

function Give() {
  return (
    <div>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            G<span className="text-light">BC</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/Home" className="nav-link active"><i className="fa fa-home me-1"></i>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/AllTeachings" className="nav-link"><i className="fa fa-gift me-1"></i>AllTeachings</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link"><i className="fa fa-video-camera me-1"></i>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="bg-light text-success text-center py-4 shadow-sm">
        <h1 className="mb-1">Glory Bible Church</h1>
        <p className="mb-0">Christian Fellowship</p>
      </header>

      {/* Give Methods */}
      <main className="container py-5">
        <div className="row g-4 justify-content-center">
          {/* Text to Give */}
          <div className="col-md-4">
            <div className="card border-success h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-success">Text to Give</h5>
                <p className="card-text">
                  Send the <strong>AMOUNT</strong> you'd like to give by texting it to{' '}
                  <a href="tel:+254795578697" className="text-success">+254 795 578 697</a>.
                </p>
              </div>
            </div>
          </div>

          {/* Mail */}
          <div className="col-md-4">
            <div className="card border-success h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-success">Mail</h5>
                <p className="card-text">
                  GBC Christian Fellowship<br />
                  P.O. Box 1090<br />
                  Jacksonville OR, 97530
                </p>
              </div>
            </div>
          </div>

          {/* In Person */}
          <div className="col-md-4">
            <div className="card border-success h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-success">In Person</h5>
                <p className="card-text">
                  Tithes & Offerings boxes are located at the back of the church sanctuary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Give;
