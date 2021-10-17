import React from "react";

const Checkout = ({ user, errorMessage }) => {
  return (
    <aside className="modal" style={{ backgroundColor: "lightBlue" }}>
      {user.name && `Hi ${user.name}`}
      <p>errorMessage</p>
    </aside>
  );
};

export default Checkout;
