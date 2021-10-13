import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Date = ({ notUser, user, room }) => {
  console.log(user);
  const [error, setError] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [allDates, setAllDates] = useState([]);
  const [startDate, endDate] = dateRange;
  const [errorMessage, setErrorMessage] = useState("");

  const handleBook = () => {
    if (user) {
      console.log(user.id);
      fetch("/bookings", {
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
            console.log(d);
          });
        } else {
          resp.json().then((errors) => {
            setErrorMessage(errors.error);
            setError(true);
          });
        }
      });
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 4000);
  }, [handleBook]);
  return (
    <>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        withPortal
        placeholderText="click to select dates"
      />
      <button type="submit" onClick={handleBook} className="btn">
        Book
      </button>
      <p>{error && errorMessage}</p>
    </>
  );
};

export default Date;
