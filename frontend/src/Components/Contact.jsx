import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for tracking loading status

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading indicator
    try {
      const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/contact/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Message sent!");
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-success shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold text-white" to="/">
            Glory Bible Church
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SundayService">Sunday Service</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active text-white" to="/contact">Contact</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold text-success">Contact Us</h1>
            <p className="text-muted">We'd love to hear from you</p>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <h4 className="text-success">📞 Get in Touch</h4>
              <p><strong>Phone:</strong> +254 712 345 678</p>
              <p><strong>Email:</strong> info@glorybiblechurch.org</p>
              <p><strong>Location:</strong> Kamadep Guest House, [City]</p>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4180631762522!2d34.000000!3d-1.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMSDCsDAwJzAwLjAiUyAzNMKwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1712672500000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            <div className="col-md-6">
              <h4 className="text-success mb-3">📝 Send a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-success px-4" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
                {isLoading && (
                  <div className="spinner-border text-success ml-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
        <footer className="bg-success text-white mt-5 pt-4 pb-3">
              <div className="container">
                <div className="row">
                  {/* Church Info */}
                  <div className="col-md-4 mb-3">
                    <h5 className="text-dark">Glory Bible Church</h5>
                    <p>
                      Kamadep Guest House<br />
                      Sunday Services: 11:00 AM<br />
                      Beulah Bookshop - Weekday Services
                    </p>
                  </div>
        
                  {/* Quick Links */}
                  <div className="col-md-4 mb-3">
                    <h5 className="text-dark">Quick Links</h5>
                    <ul className="list-unstyled">
                      <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                      <li><Link to="/About" className="text-white text-decoration-none">About</Link></li>
                      {/* <li><Link to="/Services" className="text-white text-decoration-none">Services</Link></li> */}
                      <li><Link to="/Contact" className="text-white text-decoration-none">Contact</Link></li>
                    </ul>
                  </div>
        
                  {/* Contact Info */}
                  <div className="col-md-4 mb-3">
                    <h5 className="text-dark">Contact</h5>
                    <p>
                      Email: <a href="mailto:info@glorybiblechurch.org" className="text-white">info@glorybiblechurch.org</a><br />
                      Phone: +123-456-7890
                    </p>
                  </div>
                </div>
        
                <div className="text-center border-top border-secondary pt-3">
                  <p className="mb-0">&copy; {new Date().getFullYear()} Glory Bible Church. All rights reserved.</p>
                </div>
              </div>
         </footer>
    </>
  );
};

export default Contact;
