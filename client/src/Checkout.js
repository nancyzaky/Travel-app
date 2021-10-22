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
  useEffect(() => {
    handleBook();
  }, []);
  const handleCart = () => {
    fetch("/bookings", {
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
          <section>
            <h4>{`Hi ${user.name}`}</h4>

            <p>{`You selected ${daysCount} days, Dates between ${startDate
              .toString()
              .slice(0, 16)} and ${endDate.toString().slice(0, 16)}`}</p>
          </section>
        )}

        {/* {booked && <h3>awesome!! Dates are available</h3>} */}

        <h4>{`Total price for ${daysCount} days = ${
          daysCount * room.price
        }`}</h4>

        <button className="btn" onClick={handleCart}>
          Add To Cart
        </button>

        {success && (
          <h1>{`Congratulations ${user.name} your Booking is Confirmed`}</h1>
        )}
        <h4 style={{ color: "red" }}>{errorMessage}</h4>
      </aside>
    </div>
  );
};

export default Checkout;
