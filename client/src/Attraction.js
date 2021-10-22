import React from "react";
import Map from "./Map";
const Attraction = ({ item }) => {
  return (
    <li className="shadow" style={{ width: "80%" }}>
      <ul style={{ display: "flex" }}>
        <li style={{ display: "inlineBlock" }}>
          <h3>{item.name}</h3>
          <img src={item.photo} alt="pic" className="attract-pic" />
          <h6>{item.description}</h6>
          <h5>
            Distance from the Hotel {item.distance.slice(0, 3)} miles away
          </h5>
        </li>
        <li style={{ display: "inlineBlock", float: "right" }}>
          <Map
            lat={parseInt(item.lat)}
            long={parseInt(item.long)}
            address={item.location}
          />
        </li>
      </ul>
      <buttton className="btn">Book</buttton>
    </li>
  );
};

export default Attraction;
