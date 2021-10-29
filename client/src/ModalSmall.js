import React from "react";

const ModalSmall = ({ errorMessage }) => {
  return (
    <aside
      className="modal"
      style={{
        height: "400px",
        width: "500px",
        top: "10%",
        left: "50%",
        position: "fixed",
        backgroundColor: "lightblue",
      }}
    >
      <h4 style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</h4>
    </aside>
  );
};

export default ModalSmall;
