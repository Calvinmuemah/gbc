import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function PrayerMeeting() {
  const [modal, setModalOpen] = useState(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      {modal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content p-4 text-center">
              <div className="d-flex justify-content-end">
                <Link to="/">
                  <button className="btn btn-close" onClick={closeModal}></button>
                </Link>
              </div>
              <h1 className="fw-bold">Sunday School Ministry</h1>
              <h2 className="fs-4">8:00 AM - 10:00 AM</h2>
              <h3 className="fw-bold">On Sundays</h3>
              <h3>At Grey Apartment</h3>
              <p className="mt-3">
                Don't miss out on this sweet section to flower your day with God's words. Come for just a
                minute or the whole hour as we sing hymns to our Lord and share the word of God.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PrayerMeeting;
