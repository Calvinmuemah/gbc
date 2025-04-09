import React, {useState} from 'react'
// import Modal from './Modal';
import { Link } from 'react-router-dom';
import './Service.css';

function SundayService() {
  const [modal, setModalOpen] = useState(true);
  const closeModal = () => setModalOpen(false);
    return (
      <div className="container-M2">
      {/*modal */}
        {modal && (
          <div className="modal-content">
            {/* Close button */}
            <Link
              to = "/Home"
            >
            <button onClick={closeModal}>X</button>
            </Link>
            <h1>Welcome To Our Sunday Service</h1>
            <h2>11:00 AM -1:00 PM</h2>
            <h3><strong>On Sundays</strong></h3>
            <h3>In Kamadep Guest House</h3>
            <p>Don't miss out on this sweet time to start your day with worship. Come for just a minute or the whole hour as we sing praises to our Lord and dine at the table of communion.</p>
          </div>
        )}
      </div>
    )
}

export default SundayService
