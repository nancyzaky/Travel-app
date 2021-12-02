import React from "react";

const ModalSmall = ({ errorMessage }) => {
  return (
    <div className="slide-container">
      <aside
        className="modal"
        style={{
          height: "300px",
          width: "300px",
          top: "10%",
          left: "50%",
          position: "fixed",
          backgroundColor: "white",
          boxShadow: "0 10px 10px 4px rgb(214, 241, 240)",
          color: "black",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <h4 style={{ fontWeight: "bold" }}>{errorMessage}</h4>
      </aside>
    </div>
  );
};

export default ModalSmall;
