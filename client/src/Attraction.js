import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ModalSmall from "./ModalSmall";
const Attraction = ({ item, user }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [start, setStart] = useState("");
  const [dateRange, setDateRange] = useState("");
  const countStar = (num) => {
    let word = "";
    for (let i = 0; i < num; i++) {
      word += "★";
    }
    return word;
  };
  const handleActive = () => {
    fetch(`/api/activities`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user.id,
        attraction_id: item.id,
        date: start,
      }),
    })
      .then((resp) => resp.json())
      .then((d) => {
        if (d.error) {
          setError(true);
          setErrorMessage(d.error);
        }
      });
  };
  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [error]);
  return (
    <li style={{ display: "grid" }} className="attr-list">
      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        {error && <ModalSmall errorMessage={errorMessage} />}

        <img src={item.photo} alt="pic" className="attract-pic" />

        <section style={{ float: "right" }}>
          <h3 style={{ paddingBottom: "1rem", color: "red" }}>{item.name}</h3>

          <h4 style={{ paddingBottom: "1rem" }}>{item.description}</h4>

          <h5 style={{ paddingBottom: "1rem" }}>
            Distance from the Hotel {item.distance.slice(0, 3)} miles away
          </h5>
          <h4 style={{ paddingBottom: "0.5rem" }}>Rating</h4>
          <h5
            style={{
              color: "orange",
            }}
          >
            {countStar(item.rating)}
          </h5>
          <section
            style={{
              display: "absolute",
              // border: "0.1rem solid red",
            }}
          >
            <DatePicker
              startDate={start}
              selected={start}
              onChange={(update) => {
                setStart(update);
              }}
              placeholderText="click to select planned date"
            />
            <button className="btn" onClick={handleActive}>
              Add To Activities
            </button>
          </section>
        </section>
      </div>
    </li>
  );
};

export default Attraction;
