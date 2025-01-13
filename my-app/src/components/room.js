import React, { useState, useEffect } from 'react';
import './room.css';
import Footer from './footer';
import { Link } from 'react-scroll';

function Room() {
  const [roomTypes, setRoomTypes] = useState([]);

  // Fetch room types from PMS API
  useEffect(() => {
    fetch('http://127.0.0.1:8000/get_room_types/')  // Fixed the URL here
      .then((response) => response.json())
      .then((data) => {
        setRoomTypes(data);
      })
      .catch((error) => console.error('Error fetching room types:', error));
  }, []);

  return (
    <div>
      <div className="roomcontainer">
        <div id="rooms">
          <h1>Rooms and Suites</h1>
          <h3>
            Find your perfect escape with our stylish, comfortable rooms designed to suit every need. Relax, unwind, and enjoy your stay!
          </h3>
          <Link to="secondsection" smooth={true} duration={100} className="scroll-down-icon">
            <div className="arrow"></div>
          </Link>
        </div>
      </div>

      {/* Room Types */}
      <div id="room-type-list">
        <h3>Available Room Types</h3>
        <ul>
          {roomTypes.length > 0 ? (
            roomTypes.map((roomType, index) => (
              <li key={index}>{roomType.room_type_name}</li>
            ))
          ) : (
            <p>Loading room types...</p>
          )}
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default Room;
