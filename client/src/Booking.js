import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const [logIn, setLogIn] = useState(false);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("/api/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
          if (data) {
            fetch(`/api/users/${data.id}/bookings`)
              .then((resp) => resp.json())
              .then((data) => setBookings(data));
          }
        });
      } else {
        setLogIn(true);
        return;
      }
    });
  }, []);
  const cancelBook = (key) => {
    fetch(`/api/bookings/${key}`, {
      method: "DELETE",
    });
    setBookings(() => {
      return bookings.filter((item) => {
        return item.id !== key;
      });
    });
  };
  return (
    <div style={{ width: "100%", display: "grid" }}>
      {logIn && <h3>Please Log In to view your bookings</h3>}
      {bookings.length > 0 && (
        <ul className="booking-container">
          {bookings.map((book) => {
            return (
              <>
                <li className="booking-list shadow">
                  <section style={{ paddingRight: "3rem" }}>
                    <h3>{book.room.description}</h3>
                    <img
                      src={book.pictures[0].url}
                      alt="pic"
                      className="pic-small"
                    />
                  </section>
                  <section style={{ paddingRight: "3rem", paddingTop: "5rem" }}>
                    <h4 style={{ paddingBottom: "1rem" }}>
                      Duraion: {book.duration} nights
                    </h4>

                    <h5 style={{ paddingBottom: "3rem" }}>
                      Total Paid: ${book.room.price * book.duration}
                    </h5>
                    <h5>
                      <em style={{ color: "red" }}>From:</em>{" "}
                      {book.start_date.toString().slice(0, 10)}
                    </h5>
                    <h5>
                      <em style={{ color: "red" }}>To:</em>{" "}
                      {book.end_date.toString().slice(0, 10)}{" "}
                    </h5>
                  </section>
                  <button
                    style={{ marginTop: "7rem", marginLeft: "4rem" }}
                    className="btn"
                    onClick={() => {
                      cancelBook(book.id);
                    }}
                  >
                    Cancel Booking
                  </button>
                </li>
                <hr className="booking-line"></hr>
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Booking;
