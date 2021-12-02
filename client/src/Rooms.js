import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaHotel } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
// import Room from "./Room";
import RoomsN from "./RoomsN";
const Rooms = ({ user }) => {
  const [rooms, setRooms] = useState([]);
  const [cursorX, setCursorX] = useState(null);
  const [cursorY, setCursorY] = useState(null);
  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });
  let { id } = useParams();
  const fetchUrl = () => {
    fetch(`/api/hotels/${id}/rooms`)
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
    <div
      style={{ width: "100%", display: "inline-block", paddingBottom: "2rem" }}
    >
      <Link to={`/hotel/${id}`}>
        <span
          style={{
            color: "lightBlue",
            fontSize: "30px",
            textShadow: "0px 10px 10px",
            marginLeft: "1rem",
          }}
        >
          <TiArrowBack />
        </span>
        <h4
          style={{
            fontSize: "20px",
            textShadow: "0px 13px 13px ",
            color: "grey",
            marginLeft: "1rem",
          }}
        >
          Hotel
        </h4>
      </Link>
      <ul className="rooms-container">
        {rooms.map((room) => {
          return <RoomsN room={room} user={user} key={room.id} />;
        })}
      </ul>
      <div
        className="cursor"
        style={{ left: cursorX + "px", top: cursorY + "px" }}
      ></div>
    </div>
  );
};

export default Rooms;
