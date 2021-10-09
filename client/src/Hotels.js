import React, { useState, useEffect } from "react";
import Hotel from "./Hotel";
const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("/hotels")
      .then((resp) => resp.json())
      .then((d) => setHotels(d));
  }, []);

  return (
    <>
      <ul className="hotel-cont">
        {hotels.map((hotel) => {
          return <Hotel hotel={hotel} />;
        })}
      </ul>
    </>
  );
};
export default Hotels;
