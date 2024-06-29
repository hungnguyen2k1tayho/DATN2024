import React, { useState } from "react";
import Logo from "../assets/hungthinh-logo.png";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home</Link>
          <Link to="/event">Event</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>

      <div className="rightSide">
        <Link to="/"> Home</Link>
        <Link to="/event">Event</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
