import React, { useState, useEffect } from "react";
// import Map from "./Map";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ModalSmall from "./ModalSmall";
const Attraction = ({ item, user }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [start, setStart] = useState("");
  const [dateRange, setDateRange] = useState("");
  const handleActive = () => {
    console.log(start);
    fetch(`/activities`, {
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
    <>
      <li className="shadow" style={{ position: "relative" }}>
        {error && <ModalSmall errorMessage={errorMessage} />}

        <h3>{item.name}</h3>
        <img src={item.photo} alt="pic" className="attract-pic" />
        <h6>{item.description}</h6>
        <h5>Distance from the Hotel {item.distance.slice(0, 3)} miles away</h5>
        <DatePicker
          // selectsRange={true}
          startDate={start}
          selected={start}
          // endDate={end}
          onChange={(update) => {
            setStart(update);
            //   changeDate(update);
          }}
          // withPortal
          placeholderText="click to select planned date"
        />
        <button className="btn" onClick={handleActive}>
          Add To Activities
        </button>
      </li>
    </>
  );
};

export default Attraction;
