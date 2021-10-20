import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCameraFill } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import Rating from "./Rating";
import Modal from "./Modal";
import Date from "./Date";
import Slide from "./Slide";
import Checkout from "./Checkout";

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
  const [daysCount, setDaysCount] = useState(0);
  const [booked, setBooked] = useState(false);

  const showModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const closeCheckOut = () => {
    setCheckOut(false);
  };
  const changeErrorMessage = (message) => {
    setErrorMessage(message);
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
          user_id: user.id,
          text: comment,
          rating: rate,
          name: user.name,
        }),
      });
    }
    setComment("");
    setRate(0);
  };
  const calculateDaysAndPrice = (firstDay, secondDay) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((firstDay - secondDay) / oneDay));
    return diffDays;
  };
  const handleBook = () => {
    if (user.name) {
      fetch(`/rooms/${room.id}/bookings/${startDate}/${endDate}`).then(
        (resp) => {
          if (resp.ok) {
            resp.json().then((d) => {
              console.log(d);
              setBooked(true);
              setDaysCount(() => {
                return calculateDaysAndPrice(startDate, endDate);
              });
            });
          } else {
            resp.json().then((d) => {
              setBooked(false);
              setErrorMessage(d.error);
            });
          }
        }
      );

      // fetch("/bookings", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     user_id: user.id,
      //     start_date: startDate,
      //     end_date: endDate,
      //     room_id: room.id,
      //   }),
      // }).then((resp) => {
      //   if (resp.ok) {
      //     resp.json().then((d) => {
      //       setDaysCount(() => calculateDaysAndPrice(startDate, endDate));
      //       setBooked(true);
      //     });
      //   } else {
      //     resp.json().then((errors) => {
      //       setError(true);
      //       setErrorMessage(errors.error);
      //       console.log(errors);
      //     });
      //   }
      // });
    } else {
      setError(true);
      setErrorMessage("Please Log In first");
    }
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
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        // textAlign: "center",
        marginLeft: "2rem",
      }}
    >
      {picsModal && (
        <Slide pics={room.pictures} closePicsModal={closePicsModal} />
      )}
      {checkOut && (
        <Checkout
          closeCheckOut={closeCheckOut}
          user={user}
          errorMessage={errorMessage}
          startDate={startDate}
          endDate={endDate}
          room={room}
          handleBook={handleBook}
          daysCount={daysCount}
          booked={booked}
          changeErrorMessage={changeErrorMessage}
        />
      )}
      <div className="room-card">
        <div className="room-description ">
          <h5 style={{ marginTop: "1rem", marginLeft: "1rem" }}>Features</h5>
          <hr className="hr-line"></hr>
          <ul
            style={{
              display: "flex",
              paddingLeft: "2rem",
            }}
          >
            <li style={{ paddingRight: "5rem" }}>
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
            </li>
            <li>
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
            </li>
          </ul>
          <hr className="hr-line"></hr>
          <section style={{ paddingLeft: "1rem" }}>
            <ul style={{ display: "flex" }}>
              <li style={{ paddingRight: "20rem" }}>
                <Date changeDate={changeDate} />
              </li>
              <li>
                <button
                  type="submit"
                  onClick={() => {
                    setCheckOut(true);
                    // handleBook();
                  }}
                  className="btn"
                >
                  Book
                </button>
              </li>
            </ul>
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
              style={{ height: "3rem", width: "35rem" }}
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

          {modal && <Modal room={room} closeModal={closeModal} />}
        </div>
        <div className="room-pics">
          <img src={room.pictures[0].url} alt="pic" className="pic-small" />
          <span className="cam" onClick={showPics}>
            <BsCameraFill /> {room.pictures.length}
          </span>

          <h2
            style={{
              marginTop: "1rem",
              // marginLeft: "4rem",
              textAlign: "center",
              color: "pink",
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
          <section style={{ paddingTop: "3rem", fontWeight: "bold" }}>
            <a href="#" onClick={showModal}>
              Click to see all Reviews
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RoomsN;
