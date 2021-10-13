import React, { useState } from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Map from "./Map";
import Date from "./Date";
const Room = ({ room, user }) => {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const [calendar, setCalendar] = useState(false);
  const [notUser, setNotUser] = useState(false);
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(0);
  const changeRate = (input) => {
    setRate(input);
  };
  const handleSub = (e) => {
    e.preventDefault();
    console.log(user, comment, room.id, rate);

    if (!user) {
      setNotUser(true);
    } else {
      fetch("/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          room_id: room.id,
          text: comment,
          rating: rate,
          name: user,
        }),
      });
    }
    setComment("");
    changeRate(0);
  };
  return (
    <>
      <li className="single-room">
        <section className="details">
          <h3>{room.price}</h3>
          <h3>{room.description}</h3>
          <button
            onClick={() => {
              setCalendar(true);
            }}
            className="btn"
          >
            Select Dates
          </button>
          {calendar && <Date notUser={notUser} user={user} room={room} />}
        </section>
        <ul className="room-pics-container">
          {room.pictures.map((pic) => {
            return (
              <li className="room-pics">
                <img src={pic.url} className="hotel-pic" />
              </li>
            );
          })}
        </ul>
        <section className="comment">
          <form type="submit" onSubmit={handleSub}>
            <label htmlFor="comment">Tell Us About Your Experience</label>
            <br></br>
            <input
              type="text"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></input>
            <Rating changeRate={changeRate} />
            <button className="btn">Submit</button>
          </form>
          {notUser && <h4>Please Log in To Leave a review</h4>}
          <Link to="#" onClick={showModal}>
            Click to see all Reviews
          </Link>
          {modal && <Modal room={room} closeModal={closeModal} />}
        </section>
      </li>
    </>
  );
};

export default Room;
