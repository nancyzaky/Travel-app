import React, { useState, useEffect } from "react";
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
  const [success, setSuccess] = useState(false);

  const showModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const closeCheckOut = () => {
    setCheckOut(false);
    setErrorMessage("");
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
      fetch("/api/reviews", {
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
    setSuccess(true);
  };
  const calculateDaysAndPrice = (firstDay, secondDay) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((firstDay - secondDay) / oneDay));
    return diffDays;
  };
  const handleBook = () => {
    if (user.name) {
      fetch(`/api/rooms/${room.id}/bookings/${startDate}/${endDate}`).then(
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
  const closePicsModal = (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains("slide-container")) {
      console.log("left");
      setPicsModal(false);
    }
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      setErrorMessage("");
      setSuccess(false);
    }, 3000);
    // return clearTimeout(timer);
  }, [errorMessage, success]);
  return (
    <div
      style={{
        width: "90%",
        justifyContent: "center",
        // textAlign: "center",
        marginLeft: "3rem",
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
        {modal && <Modal room={room} closeModal={closeModal} user={user} />}

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
            <ul style={{ display: "flex", paddingRight: "20rem" }}>
              <li>
                <Date changeDate={changeDate} />
              </li>
              <li style={{ paddingLeft: "5rem" }}>
                <button
                  type="submit"
                  onClick={() => {
                    if (startDate && endDate) {
                      setCheckOut(true);
                    } else {
                      setError(true);

                      setErrorMessage("Please select start and end dates");
                    }
                  }}
                  className="btn"
                >
                  Book
                </button>
              </li>
            </ul>
            {error && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
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
              style={{ height: "3rem", width: "35rem", paddingLeft: "0.5rem" }}
              type="text"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></input>
            <Rating changeRate={changeRate} />

            <button className="btn">Submit</button>
            {!notUser && (
              <aside className={success ? "success active" : "success"}>
                <h6>Review Has Been Submitted</h6>
              </aside>
            )}
          </form>

          {notUser && <h4>Please Log in To Leave a review</h4>}
        </div>
        <div className="room-pics">
          <h2
            style={{
              marginTop: "1rem",
              textAlign: "center",
              color: "#444444",
              textShadow:
                "1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC",
            }}
          >
            {room.specific.bed} Room
          </h2>
          <img src={room.pictures[0].url} alt="pic" className="pic-small" />
          <br></br>
          <span className="cam" onClick={showPics}>
            <BsCameraFill /> {room.pictures.length}
          </span>

          <h4
            style={{
              marginTop: "1rem",
              color: "black",
            }}
          >
            Starts From ${room.price} Per Night
          </h4>
          <section style={{ paddingTop: "1.5rem", fontWeight: "bold" }}>
            <a href="#" onClick={showModal} style={{ color: "black" }}>
              Click to see all Reviews
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RoomsN;
