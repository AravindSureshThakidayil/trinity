import React, { createContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import "./header.css";
import profile from "./profile.png";
import { useState, useContext } from "react";

function Header() {
  const UserContext = createContext();

  return (
    <>
      <div className="blue-bar">
        <div className="logo-1">Trinity</div>
        <div className="tabs">
          <div className="tab">How we work</div>
          <div className="tab">Our team</div>
          <div className="tab">Contact Us</div>
        </div>
        <div className="button">
          <Link to="/signIn">Sign In</Link>
        </div>
        <div className="profile">
          <img src={profile} />
        </div>
      </div>
    </>
  );
}

export default Header;
