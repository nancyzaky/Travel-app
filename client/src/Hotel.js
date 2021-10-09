import React from "react";

const Hotel = ({ hotel }) => {
  return (
    <li className="hotel">
      <h3 className="hotel-name">{hotel.location}</h3>
      <img src={hotel.image} alt="pic" className="hotel-pic" />
    </li>
  );
};

export default Hotel;
