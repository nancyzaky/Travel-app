import React from "react";

const Prediction = ({ pred, index }) => {
  return (
    // <li className="pred-list">
    <div
      className="shadow-pred"
      style={{
        textAlign: "start",
        display: "grid",
        width: "40%",
        // marginLeft: "6rem",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "1fr 1fr 1fr",
        justifyContent: "end",
        height: "32vh",
        marginRight: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <ul style={{ display: "grid" }}>
        <h4 style={{ paddingBottom: "1rem" }}>Day {index + 1} </h4>
        <p>Humidity: {pred.humidity}</p>
        <p>Pressure: {pred.pressure}</p>
        <p>Wind Speed: {pred.wind_speed}</p>
      </ul>
      <ul style={{ display: "grid", marginRight: "1rem" }}>
        <h4 style={{ paddingBottom: "1rem" }}>Temperature</h4>
        <p>Average Temperature: {pred.temp.average} K</p>
        <p>Max Temperature {pred.temp.average_max}</p>
        <p>Min Temperature {pred.temp.average_min}</p>
      </ul>
      <ul style={{ display: "grid" }}>
        <h4 style={{ paddingBottom: "1rem" }}>Historical weather Record</h4>
        <p>Max Temperature {pred.temp.record_max}</p>
        <p>Min Temperature {pred.temp.record_min}</p>
      </ul>
    </div>
    // </li>
  );
};

export default Prediction;
