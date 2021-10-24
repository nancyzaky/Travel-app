import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./Data";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FcCalendar } from "react-icons/fc";
import { GiDutchBike } from "react-icons/gi";

const Nav = ({ user, changeUser }) => {
  const [showNav, setShowNav] = useState(false);
  const handleSubmenu = () => {
    setShowNav(!showNav);
  };
  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    });
    changeUser({});
  };
  return (
    <>
      <div className="nav">
        <AiOutlineMenu
          onClick={handleSubmenu}
          style={{
            backgroundColor: "none",
            marginLeft: "2rem",
            fontSize: "2rem",
          }}
        />
        <section className="user-name">
          {user.name && <p>{`Hi  ${user.name}`}</p>}
        </section>
      </div>
      <nav className={showNav ? "side active" : "side"}>
        <ul onClick={handleSubmenu} style={{ width: "100%" }}>
          <li className="cross">
            <Link to="#">
              <AiOutlineArrowLeft
                style={{ fontSize: "2rem", color: "white" }}
              />
            </Link>
          </li>
          {data.map((item, index) => {
            return (
              <li className="nav-links" key={item.id}>
                <Link to={item.path}>
                  {item.icon}
                  <span className="nav-span"> {item.title}</span>
                </Link>
              </li>
            );
          })}
          <li className="nav-links">
            <Link to={`/book`}>
              <FcCalendar />

              <span className="nav-span">Booking</span>
            </Link>
          </li>
          <li className="nav-links">
            <Link to={`/activity`}>
              <GiDutchBike style={{ fontSize: "1.5rem" }} />

              <span className="nav-span">Activities</span>
            </Link>
          </li>
          <li className="nav-links" onClick={handleLogOut}>
            <Link to="/">
              <RiLogoutBoxLine />
              <span className="nav-span">Log Out</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
