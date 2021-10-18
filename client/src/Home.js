import React from "react";
import Hotels from "./Hotels";
import Three from "./Three";
const Home = ({ user }) => {
  return (
    <div className="home">
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <Three />
      </div>
      <div className="bg"></div>

      <Hotels />
    </div>
  );
};

export default Home;
