import React from "react";
import { FaUserCircle, FaHome, FaUsers } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
export const data = [
  { id: 1, title: "Home", path: "/", icon: <FaHome /> },
  { id: 2, title: "Sign Up", path: "/signup", icon: <FaUsers /> },
  { id: 3, title: "Log In", path: "/login", icon: <FaUserCircle /> },
];
