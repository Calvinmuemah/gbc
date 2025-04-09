import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('toggle')) {
      event.target.classList.toggle('active');
    }
  });
  


  return (
    <div className="main-container">
      {/* Aside Section */}
      <div className="aside">
        <div className="logo">
          <a href="#about"><span>G</span>BC</a>
        </div>
        <div className="toggle">
          <span></span>
        </div>
        <ul className="nav" id='navbar'>
          <li><a href="#home" className="active"><i className="fa fa-home"></i>Home</a></li>
          <li><a href="#services"><i className="fa fa-list"></i>Services</a></li>
          <li><a href="#teachings"><i className="fa fa-comments"></i>Teachings</a></li>
          <li><a href="#ministries"><i className="fa fa-briefcase"></i>Ministries</a></li>
          <li><a href="#about"><i className="fa fa-user"></i>About</a></li>
          <Link
            to="/Give "
          >
          <li><i className="fa fa-comments"></i>Give Offerings</li>
          </Link>
          <li><a href="#livestream"><i className="fa fa-comments"></i>LiveStream</a></li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="main-content">
        {/* Home Section */}
        <section className="home section" id="home">
          <div className="container">
            <div className="overlay">
              <div className="img">
                <img src="/imgs/home.jpg" alt="Prayer Meeting Section"/>
              </div>
              {/* <a href="#navbar"> */}
                <div className='toggle'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              {/* </a> */}
              <div className="quote">
                "Come to Me, all you who labor and are heavy laden,<br /> and I will give you rest."<br />- Jesus
              </div>
              <a href="#teachings">
                <button className="welcome-button">Welcome</button>
              </a>
              </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services section" id="services">
          <div className="container">
            <div className="row">
              <div className="grid1">
                <h2>Services</h2>
                <div className="cards1">
                  <Link
                    to="/PrayerMeeting"
                  >
                    <div className="card1">
                      <img src="/imgs/prayer meeting.jpg" alt="Prayer Meeting Section" />
                      <div className="text">
                        <h2>Prayer Meeting Section</h2>
                        <p>6:00 PM</p>
                        <p>In Beulah Bookshop</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/BibleStudy"
                  >
                    <div className="card1">
                      <img src="/imgs/prayer meeting.jpg" alt="Bible Study Section" />
                      <div className="text">
                        <h2>Bible Study Section</h2>
                        <p>1:00 PM</p>
                        <p>In Beulah Bookshop</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/DoctrinalStudies"
                  >
                    <div className="card1">
                      <img src="/imgs/prayer meeting.jpg" alt="Doctrinal Studies" />
                      <div className="text">
                        <h2>Doctrinal Studies</h2>
                        <p>6:00 PM Thursdays</p>
                        <p>In Beulah Bookshop</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/BooksClub"
                  >
                    <div className="card1">
                      <img src="/imgs/prayer meeting.jpg" alt="Books Club" />
                      <div className="text">
                        <h2>Books Club</h2>
                        <p>6:00 PM Fridays</p>
                        <p>In Beulah Bookshop</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/SundayService"
                  >
                    <div className="card1">
                      <img src="/imgs/prayer meeting.jpg" alt="Sunday Service" />
                      <div className="text">
                        <h2>Sunday Service</h2>
                        <p>11:00 AM Sundays</p>
                        <p>In Kamadep Guest House</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /* Services Section end*/}
        {/* Teachings Section */}
        <section className="teachings section" id="teachings">
          <div className="container">
            <div className="row">
              <div className="teachings">
                <h2>Teachings</h2>
                <div className="video-container">
                  <video controls className='teach-1'>
                    <source src="/vids/teachings.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="all-teachings">
                  <Link
                    to="/AllTeachings"
                  >
                  <button>All Teachings</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Ministries Section start */}
        <section className="ministries section" id="ministries">
          <div className="container">
            <div className="row">
              <div className="grid padd-15">
                <h2>Ministries</h2>
                <div className="cards">
                  {/* Example ministry card */}
                  <Link
                    to="/SundaySchool"
                  >
                    <div className="card">
                      <img src="/imgs/prayer-meeting.jpg" alt="Sunday School Ministry" />
                      <div className="text">
                        <h2>Sunday School Ministry</h2>
                        <p>8:00 AM</p>
                        <p>At Grey Apartment</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/SundaySchool"
                  >
                  <div className="card">
                    <img src="/imgs/prayer-meeting.jpg" alt="Sunday School Ministry" />
                    <div className="text">
                      <h2>Sunday School Ministry</h2>
                      <p>8:00 AM</p>
                      <p>At Grey Apartment</p>
                    </div>
                  </div>
                  </Link>
                  <Link
                    to="/SundaySchool"
                  >
                  <div className="card">
                    <img src="/imgs/prayer-meeting.jpg" alt="Sunday School Ministry" />
                    <div className="text">
                      <h2>Sunday School Ministry</h2>
                      <p>8:00 AM</p>
                      <p>At Grey Apartment</p>
                    </div>
                  </div>
                  </Link>
                  <Link
                    to="/SundaySchool"
                  >
                  <div className="card">
                    <img src="/imgs/prayer-meeting.jpg" alt="Sunday School Ministry" />
                    <div className="text">
                      <h2>Sunday School Ministry</h2>
                      <p>8:00 AM</p>
                      <p>At Grey Apartment</p>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Ministries section end */}
        
      {/* Other Pages */}
      <div className="other-pages">
        {/* Staff Section */}
        <div className="staff-section">
          <h2>What We're About</h2>
          <p>
            Here at ACF we go straight through the Bible. Looking at Jesus verse-by-verse,
            chapter-by-chapter, and book-by-book.
            <br />
            <em>- Hebrews 10:7</em>
          </p>
          <a href="/staff.html">
            <button>Meet Our Staff</button>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
