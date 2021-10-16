import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./Data";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RiLogoutBoxLine } from "react-icons/ri";
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
        {user.name && <p>{`Hi  ${user.name}`}</p>}
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
                  <span> {item.title}</span>
                </Link>
              </li>
            );
          })}
          <li className="nav-links" onClick={handleLogOut}>
            <Link to="/">
              <RiLogoutBoxLine />
              <span>Log Out</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
