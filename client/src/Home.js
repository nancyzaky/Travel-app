import React from "react";
import Hotels from "./Hotels";
import Three from "./Three";
import Footer from "./Footer";
import { GiAirplaneDeparture } from "react-icons/gi";

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
      <div className="bg">
        <section
          style={{
            float: "right",
            height: "30rem",
            marginLeft: "65rem",
            width: "20rem",
            marginTop: "5rem",
            textShadow: "#FF2D95 0px 0px 75px",
            color: "white",
          }}
        >
          <h1 style={{ paddingTop: "10rem" }}>
            Earn points every time you book a room in one of our hotels
          </h1>
          <h4 style={{ paddingTop: "10rem", color: "pink" }}>
            Check Flights Quotes and near by attractions while you are booking
            your trip!!
          </h4>
          <span>
            <GiAirplaneDeparture style={{ fontSize: "28px", color: "white" }} />
          </span>
        </section>
      </div>

      <Hotels />
      <Footer />
    </div>
  );
};

export default Home;
