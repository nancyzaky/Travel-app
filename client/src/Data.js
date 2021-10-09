import React from "react";
import { FaUserCircle, FaHome, FaUsers } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
export const data = [
  { title: "Home", path: "/", icon: <FaHome /> },
  { title: "Sign Up", path: "/signup", icon: <FaUserCircle /> },
  { title: "Log In", path: "/login", icon: <FaUsers /> },
];
