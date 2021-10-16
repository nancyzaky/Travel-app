import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Room from "./Room";
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
      <ul className="rooms-container">
        {rooms.map((room) => {
          return <RoomsN room={room} user={user} key={room.id} />;
        })}
      </ul>
    </div>
  );
};

export default Rooms;
