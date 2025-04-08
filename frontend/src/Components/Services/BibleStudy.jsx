import React, {useState} from 'react'
// import './Services.css';
import { Link } from 'react-router-dom';

function BibleStudy() {
  const [modal, setModalOpen] = useState(true);

  const closeModal = () => setModalOpen(false);
  return (
    <div className="container-M2">
    {/*modal */}
     {modal && (
      <div className="modal-content">
        {/* Close button */}
        <Link
          to = "/"
        >
        <button onClick={closeModal}>X</button>
        </Link>
        <h1>Bible Study Section</h1>
        <h2>6:00 PM - 7:00 PM</h2>
        <h3><strong>On Tuesdays</strong></h3>
        <h3>In Beulah Bookshop</h3>
        <p>Don't miss out on this sweet section to flower your day with God's words. Come for just a minute or the whole hour as we sing hymns to our Lord and shear the word of God.</p>
     </div>
    )}
  </div>
  )
} 

export default BibleStudy

