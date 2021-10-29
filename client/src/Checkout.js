import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const Checkout = ({
  user,
  errorMessage,
  room,
  endDate,
  startDate,
  handleBook,
  booked,
  closeCheckOut,
  daysCount,
  changeErrorMessage,
}) => {
  const [success, setSucces] = useState(false);
  const [points, setPoints] = useState(0);
  useEffect(() => {
    handleBook();
  }, []);
  const handleCart = () => {
    fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user.id,
        start_date: startDate,
        end_date: endDate,
        room_id: room.id,
        duration: daysCount,
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((d) => {
          setSucces(true);
          setPoints(100 * daysCount);
        });
      } else {
        resp.json().then((errors) => {
          changeErrorMessage(errors.error);
        });
      }
    });
  };
  return (
    <div className="slide-container">
      <aside
        className="slide"
        style={{ backgroundColor: "white", height: "300px" }}
      >
        <span className="close" onClick={closeCheckOut}>
          <IoMdClose />
        </span>
        {!startDate && <p>please select a start and end date</p>}
        {user.name && startDate && (
          <section style={{ textAlign: "center" }}>
            <h4
              style={{ color: "red", marginBottom: "2rem" }}
            >{`Hi ${user.name}`}</h4>

            <h5>{`You selected ${daysCount} days, Dates between ${startDate
              .toString()
              .slice(0, 16)} and ${endDate.toString().slice(0, 16)}`}</h5>
            <h4>{`Total price for ${daysCount} days = $${
              daysCount * room.price
            }`}</h4>
            <button className="btn" onClick={handleCart}>
              Check Out
            </button>
          </section>
        )}

        {/* {booked && <h3>awesome!! Dates are available</h3>} */}

        {success && (
          <>
            <h3
              style={{ color: "green", textAlign: "center" }}
            >{`Congratulations ${user.name} your Booking is Confirmed`}</h3>
            <h4
              style={{ color: "blue", textAlign: "center", paddingTop: "1rem" }}
            >
              {`You earned X${points} points `}{" "}
            </h4>
          </>
        )}

        <h4 style={{ color: "red", marginTop: "5rem" }}>{errorMessage}</h4>
      </aside>
    </div>
  );
};

export default Checkout;
