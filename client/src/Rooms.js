import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaHotel } from "react-icons/fa";
// import Room from "./Room";
import RoomsN from "./RoomsN";
const Rooms = ({ user }) => {
  const [rooms, setRooms] = useState([]);
  let { id } = useParams();
  const fetchUrl = () => {
    fetch(`/hotels/${id}/rooms`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setRooms(data);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return (
    <div>
      <Link to={`/hotel/${id}`}>
        Back to Hotel
        <span></span>
      </Link>
      <ul className="rooms-container">
        {rooms.map((room) => {
          console.log(rooms);
          return <RoomsN room={room} user={user} key={room.id} />;
        })}
      </ul>
    </div>
  );
};

export default Rooms;
