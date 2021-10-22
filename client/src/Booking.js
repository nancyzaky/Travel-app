import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const [logIn, setLogIn] = useState(false);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
          if (data) {
            fetch(`users/${data.id}/bookings`)
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
    fetch(`/bookings/${key}`, {
      method: "DELETE",
    });
    setBookings(() => {
      return bookings.filter((item) => {
        return item.id !== key;
      });
    });
  };
  return (
    <div style={{ width: "100%" }}>
      {logIn && <h3>Please Log In to view your bookings</h3>}
      {bookings.length > 0 && (
        <ul className="booking-container">
          {bookings.map((book) => {
            console.log(book);
            return (
              <>
                <li className="booking-list shadow">
                  <h3>{book.room.description}</h3>
                  <img
                    src={book.pictures[0].url}
                    alt="pic"
                    className="pic-small"
                  />
                  <h4>For {book.duration} nights</h4>
                  <h5>From: {book.start_date.toString().slice(0, 10)}</h5>
                  <h5>To: {book.end_date.toString().slice(0, 10)} </h5>
                  <h6>Total Paid: ${book.room.price * book.duration}</h6>
                  <button
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
