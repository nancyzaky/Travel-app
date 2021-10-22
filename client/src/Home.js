import React from "react";
import Hotels from "./Hotels";
import Three from "./Three";
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
};

export default Home;
