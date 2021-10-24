import React from "react";

const ModalSmall = ({ errorMessage }) => {
  return (
    <aside
      className="modal"
      style={{ height: "300px", width: "400px", float: "right", top: "50%" }}
    >
      <h4 style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</h4>
    </aside>
  );
};

export default ModalSmall;
