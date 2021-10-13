import React from "react";
import Hotels from "./Hotels";
import Three from "./Three";

const Home = ({ user }) => {
  return (
    <div className="home">
      <div className="bg"></div>
      <Hotels />
      <Three />
    </div>
  );
};

export default Home;
