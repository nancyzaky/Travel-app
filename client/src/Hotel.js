import React from "react";
import { useHistory } from "react-router-dom";
import Rating from "./Rating";
const Hotel = ({ hotel }) => {
  let history = useHistory();
  const handleClick = () => {
    history.push(`/hotel/${hotel.id}`);
  };

  return (
    <li className="hotel">
      <h3 className="hotel-name">{hotel.location}</h3>
      <img
        src={hotel.image}
        alt="pic"
        className="hotel-pic"
        onClick={handleClick}
      />
      {/* <Rating /> */}
    </li>
  );
};

export default Hotel;
