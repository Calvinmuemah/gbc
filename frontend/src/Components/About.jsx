import React from "react"; 
import { Link } from "react-router-dom";
import crossImage from "/imgs/prayer meeting.jpg"; 

const Footer = () => {
  return (
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
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
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
  );
};

const About = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <Link className="navbar-brand" to="/">Glory Bible Church</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/About">About</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/Services">Services</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link active" to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="py-5">
        <div className="container">
          {/* Page Title */}
          <div className="text-center mb-5">
            <h1 className="fw-bold text-success">About Glory Bible Church</h1>
            <p className="text-muted">Rooted in Christ. Growing in Grace. Living with Purpose.</p>
          </div>

          {/* The Good News Section */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 className="text-success mb-4">The Good News</h2>
              <p>
                The gospel is the <strong>“Good News”</strong> of Jesus Christ. Romans 6:23 explains the heavy price of our sin:
                <em> “The wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.”</em>
              </p>
              <p>
                God has provided a gift, a solution to our sin, and at great cost to Himself. It was His only Son who came to suffer and die for our sins.
              </p>
              <p className="fst-italic">
                “For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.” – JOHN 3:16
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={crossImage}
                alt="Wooden Cross in Nature"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Our Mission */}
          <div className="mb-5">
            <h2 className="text-success mb-3">Our Mission</h2>
            <p>
              At Glory Bible Church, our mission is to glorify God by making disciples through Gospel-centered teaching, loving community, and vibrant worship. We believe in raising a generation grounded in truth, hope, and love.
            </p>
          </div>
            {/* Call to Action */}
          <div className="text-center mt-5">
            <h4 className="fw-bold mb-3">Join Us This Sunday!</h4>
            <p>
              Worship with us every Sunday at 11:00 AM at Kamadep Guest House. Experience God's presence, love, and truth in a community that feels like family.
            </p>
            <a href="/learnMore" className="btn btn-success px-4 py-2">Learn More</a>
          </div>
          {/* Our Beliefs
          <div className="mb-5">
            <h2 className="text-success mb-3">Our Beliefs</h2>
            <ul>
              <li>We believe the Bible is the inspired Word of God.</li>
              <li>We believe salvation is by grace through faith in Jesus Christ alone.</li>
              <li>We believe in the power of prayer, the guidance of the Holy Spirit, and the unity of the Church.</li>
              <li>We believe every believer is called to share the Gospel and serve others.</li>
            </ul>
          </div> */}

          {/* Meet the Pastor
          <div className="mb-5">
            <h2 className="text-success mb-3">Meet the Pastor</h2>
            <p>
              Pastor [Full Name] leads Glory Bible Church with a heart for discipleship and a passion for preaching the Word. With over [X] years of ministry, his leadership has inspired many to walk in faith and deepen their relationship with Jesus.
            </p>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;