import React, { useState, useEffect } from "react";
import Prediction from "./Prediction";
import { useParams } from "react-router-dom";
const Weather = () => {
  const [city, setCity] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const fetchUrl = () => {
    fetch(`/api/hotels/${id}`)
      .then((resp) => resp.json())
      .then((d) => {
        setCity(d.city);
      });
  };
  useEffect(() => {
    fetchUrl();
  }, []);

  const fetchApi = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(
      `https://community-open-weather-map.p.rapidapi.com/climate/month?q=${city}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "a1da1d910emsh025e0dda21f5099p104f3bjsn3e7e2faded2a",
        },
      }
    )
      .then((resp) => resp.json())
      .then((d) => {
        console.log(d.list);

        setLoading(false);
        setPredictions(d.list);
      });
  };
  return (
    <div className="weather-cont">
      <h4
        style={{
          textAlign: "center",
          paddingTop: "2rem",
          letterSpacing: "3px",
        }}
      >
        Weather prediction in <em style={{ color: "red" }}>{city}</em> for the
        next 30 days{" "}
      </h4>
      <form style={{ padding: "20px" }}>
        <label>City</label>
        <br></br>
        <input
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        ></input>
        <br></br>
        <button className="btn" onClick={fetchApi}>
          Submit
        </button>
      </form>
      <ul
        style={{
          width: "100%",
          height: "auto",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {!loading &&
          predictions.map((pred, index) => {
            return <Prediction pred={pred} key={index} index={index} />;
          })}
      </ul>
    </div>
  );
};

export default Weather;
