import React, { createContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import "./header.css";
import profile from "./profile.png";
import { logIn } from "../Sign-in/Sign-in";
import { useState, useContext } from "react";

function Header() {
  const UserContext = createContext();
  return (
    <>
      <div className="blue-bar">
        <div className="logo-1"><Link to="/">Trinity</Link></div>
        <div className="tabs">
          <div className="tab">How we work</div>
          <div className="tab">Our team</div>
          <div className="tab">Contact Us</div>
          {(logIn) &&
            <div className="tab"><Link to="/borrow">Your requests</Link></div>
          }{(logIn) && <div className="tab"><Link to="/lend">Your dispersals</Link></div>
          }
        </div>
          {(!logIn) && 
            <div className="button">
              <Link to="/signIn">Sign In</Link>
            </div>}
          {(logIn) &&
            <div className="profile">
              <img src={profile} />
            </div>}
        
      </div>
    </>
  );
}

export default Header;
