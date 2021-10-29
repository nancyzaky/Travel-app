import React, { useState, useEffect } from "react";
import Rating from "./Rating";
import { Link, useHistory } from "react-router-dom";
import Modal from "./Modal";
import Map from "./Map";
import Date from "./Date";
import Slide from "./Slide";
import Checkout from "./Checkout";

const Room = ({ room, user }) => {
  const history = useHistory();
  const calculateDaysAndPrice = (firstDay, secondDay) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((firstDay - secondDay) / oneDay));
    return diffDays;
  };

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
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [daysCount, setDaysCount] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [checkOut, setCheckOut] = useState(false);
  const changeRate = (input) => {
    setRate(input);
  };
  const changeDate = (arr) => {
    setStartDate(arr[0]);
    setEndDate(arr[1]);
  };

  const handleSub = (e) => {
    e.preventDefault();
    console.log(user, comment, room.id, rate);

    if (!user.name) {
      setNotUser(true);
    } else {
      fetch("/api/reviews", {
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

  const handleBook = () => {
    if (user.name) {
      fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: user.id,
          start_date: startDate,
          end_date: endDate,
          room_id: room.id,
        }),
      }).then((resp) => {
        if (resp.ok) {
          resp.json().then((d) => {
            // setCheckOut(true);
            setDaysCount(() => calculateDaysAndPrice(startDate, endDate));
            console.log(d);
          });
        } else {
          resp.json().then((errors) => {
            setError(true);
            setErrorMessage(errors.error);
            console.log(errors);
          });
        }
      });
    } else {
      setError(true);
      setErrorMessage("Please Log In first");
    }
  };
  useEffect(() => {}, [errorMessage]);
  return (
    <>
      <li className="single-room">
        <Slide pics={room.pictures} />

        <ul className="room-pics-container">
          {room.pictures.map((pic) => {
            return (
              <li className="room-pics" key={pic.id}>
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
        <section className="shadow" style={{ marginRight: "18rem" }}>
          <h2>{room.description}</h2>

          <h5>Price per night ${room.price}</h5>
          <button
            onClick={() => {
              setCalendar(true);
            }}
            className="btn"
          >
            Select Dates
          </button>
          {calendar && <Date changeDate={changeDate} />}
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
      </li>
    </>
  );
};

export default Room;
