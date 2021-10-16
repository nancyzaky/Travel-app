import React from "react";
import { useHistory, Link } from "react-router-dom";
import Rating from "./Rating";
const Hotel = ({ hotel }) => {
  let history = useHistory();
  const handleClick = () => {
    history.push(`/hotel/${hotel.id}`);
  };

  return (
    <li className="hotel">
      {" "}
      <img
        src={hotel.image}
        alt="pic"
        className="hotel-pic"
        onClick={handleClick}
      />
      <h3 className="hotel-name">{hotel.location}</h3>
      {/* <Rating /> */}
    </li>
  );
};

export default Hotel;
