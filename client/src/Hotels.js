import React, { useState, useEffect } from "react";
import Hotel from "./Hotel";
import Footer from "./Footer";
const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [city, setCity] = useState("");
  const handleChange = (val) => {
    let wordLength = val.split("").length;
    console.log(wordLength);
    let newArr = hotels.filter((hotel) => {
      return (
        hotel.city.split("").slice(0, wordLength).join("").toLowerCase() ===
        val.toLowerCase()
      );
    });
    setFilteredHotels(newArr);
  };
  useEffect(() => {
    fetch("/api/hotels")
      .then((resp) => resp.json())
      .then((d) => {
        setFilteredHotels(d);
        setHotels(d);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "grey" }}>
      <input
        value={city}
        placeholder="search by destination"
        style={{
          justifyContent: "center",
          borderRadius: "2rem",
          marginLeft: "1rem",
          paddingLeft: "1rem",
          marginBottom: "1rem",
        }}
        onChange={(e) => {
          handleChange(e.target.value);
          setCity(e.target.value);
        }}
      ></input>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          display: "fixed",
          height: "1200px",
          backgroundColor: "grey",
          margin: "auto",
        }}
      >
        <ul>
          {filteredHotels.map((hotel) => {
            return <Hotel key={hotel.id} hotel={hotel} />;
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
};
export default Hotels;
