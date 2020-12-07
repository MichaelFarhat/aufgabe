import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="contact">Contact</Link>
    </div>
  );
}

export default Navbar;
