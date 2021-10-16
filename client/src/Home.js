import React from "react";
import Hotels from "./Hotels";

const Home = ({ user }) => {
  return (
    <div className="home">
      <div className="bg"></div>
      <Hotels />
    </div>
  );
};

export default Home;
