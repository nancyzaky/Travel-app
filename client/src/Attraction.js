import React, { useState, useEffect } from "react";
// import Map from "./Map";
import ModalSmall from "./ModalSmall";
const Attraction = ({ item, user }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleActive = () => {
    fetch(`/activitys`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: user.id, attraction_id: item.id }),
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
        <button className="btn" onClick={handleActive}>
          Add To Activities
        </button>
      </li>
    </>
  );
};

export default Attraction;
