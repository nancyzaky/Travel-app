import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCameraFill } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import Rating from "./Rating";
import Modal from "./Modal";
import Date from "./Date";
import Slide from "./Slide";

const RoomsN = ({ room, user }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(0);
  const [notUser, setNotUser] = useState(false);
  const [modal, setModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [checkOut, setCheckOut] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState(false);
  const [picsModal, setPicsModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const handleSub = (e) => {
    e.preventDefault();
    console.log(user, comment, room.id, rate);

    if (!user.name) {
      setNotUser(true);
    } else {
      fetch("/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          room_id: room.id,
          text: comment,
          rating: rate,
          name: user.name,
        }),
      });
    }
    setComment("");
    setRate(0);
  };
  const changeRate = (input) => {
    setRate(input);
  };
  const changeDate = (arr) => {
    setStartDate(arr[0]);
    setEndDate(arr[1]);
  };
  const showPics = () => {
    setPicsModal(!picsModal);
  };
  const closePicsModal = () => {
    setPicsModal(false);
  };
  return (
    <div style={{ display: "relative", position: "relative" }}>
      {picsModal && (
        <Slide pics={room.pictures} closePicsModal={closePicsModal} />
      )}
      <div className="room-card">
        <div className="room-description ">
          <h5 style={{ marginTop: "1rem", marginLeft: "1rem" }}>Features</h5>
          <hr className="hr-line"></hr>
          <ul style={{ display: "flex", paddingLeft: "1rem" }}>
            {room.specific.breakfast && (
              <li className="specific">
                <h5>
                  BreakFast included{" "}
                  <span>
                    <FcCheckmark style={{ fontSize: "1.5rem" }} />
                  </span>
                </h5>{" "}
              </li>
            )}
            {room.specific.bar && (
              <li style={{ display: "grid" }}>
                <h5>
                  Mini Bar included{" "}
                  <span>
                    <FcCheckmark style={{ fontSize: "1.5rem" }} />
                  </span>
                </h5>{" "}
              </li>
            )}
            {room.specific.ocean_view && (
              <li>
                <h5>
                  Ocean View{" "}
                  <span>
                    <FcCheckmark style={{ fontSize: "1.5rem" }} />
                  </span>
                </h5>{" "}
              </li>
            )}
            {room.specific.a_c && (
              <li>
                <h5>
                  Air Condition
                  <span>
                    <FcCheckmark style={{ fontSize: "1.5rem" }} />
                  </span>
                </h5>{" "}
              </li>
            )}
            {room.specific.tv && (
              <li>
                <h5>
                  Flat Screen TV
                  <span>
                    <FcCheckmark style={{ fontSize: "1.5rem" }} />
                  </span>
                </h5>{" "}
              </li>
            )}{" "}
            {room.specific.hair_dryer && (
              <li>
                <h5>
                  Hair Drier
                  <span>
                    <FcCheckmark style={{ fontSize: "1.5rem" }} />
                  </span>
                </h5>{" "}
              </li>
            )}{" "}
            {room.specific.fridge && (
              <li>
                <h5>
                  Fridge Included
                  <span>
                    <FcCheckmark style={{ fontSize: "1.5rem" }} />
                  </span>
                </h5>{" "}
              </li>
            )}
          </ul>
          <hr className="hr-line"></hr>
          <section>
            <Date changeDate={changeDate} />
            <button
              type="submit"
              onClick={() => {
                setCheckOut(true);
              }}
              className="btn"
            >
              Book
            </button>
            {error && <p>{errorMessage}</p>}
          </section>
          <hr className="hr-line"></hr>
          <form
            type="submit"
            onSubmit={handleSub}
            style={{ paddingLeft: "1rem" }}
          >
            <label htmlFor="comment">Tell Us About Your Experience</label>
            <br></br>
            <input
              style={{ height: "3rem", width: "25rem" }}
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

          <a href="#" onClick={showModal}>
            Click to see all Reviews
          </a>
          {modal && <Modal room={room} closeModal={closeModal} />}
        </div>
        <div className="room-pics">
          <img src={room.pictures[0].url} alt="pic" className="pic-small" />
          <span className="cam" onClick={showPics}>
            <BsCameraFill /> {room.pictures.length}
          </span>
          <h2
            style={{
              right: "50%",
              marginTop: "1rem",
              marginLeft: "4rem",
              color: "red",
            }}
          >
            {room.specific.bed} Room
          </h2>
          <h4
            style={{
              marginTop: "1rem",
              marginLeft: "2rem",
              color: "grey",
            }}
          >
            Starts From ${room.price} Per Night
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RoomsN;
