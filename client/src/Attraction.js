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
    let timer = setTimeout(() => {
      setError(false);
    }, 5000);
    // return clearTimeout(timer);
  }, [errorMessage, error]);
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "wrap",
        paddingBottom: "6rem",
      }}
      className="attr-list"
    >
      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          width: "90%",
          // maxHeight: "500px",
          minHeight: "500px",
          display: "grid",
          alignItems: "center",
        }}
      >
        {error && <ModalSmall errorMessage={errorMessage} img={item.photo} />}
        <img src={item.photo} alt="pic" className="attract-pic" />
        <h3 style={{ paddingBottom: "1rem", color: "red" }}>{item.name}</h3>
        <h4 style={{ paddingBottom: "1rem", height: "3rem" }}>
          {item.description.slice(0, 68)} ...
          <h6
            onClick={() => {
              setError(true);
              setErrorMessage(item.description);
            }}
          >
            Read more
          </h6>
        </h4>

        <h5 style={{ paddingBottom: "1rem" }}>
          Distance from the Hotel {item.distance.slice(0, 3)} miles away
        </h5>
        <h4>Rating</h4>
        <h5
          style={{
            color: "orange",
          }}
        >
          {countStar(item.rating)}
        </h5>
        <DatePicker
          startDate={start}
          selected={start}
          onChange={(update) => {
            setStart(update);
          }}
          placeholderText="click to select planned date"
        />
        <button
          className="btn"
          style={{ textAlign: "center", marginLeft: "8rem", width: "8rem" }}
          onClick={handleActive}
        >
          Add To Activities
        </button>
      </div>
    </li>
  );
};

export default Attraction;
