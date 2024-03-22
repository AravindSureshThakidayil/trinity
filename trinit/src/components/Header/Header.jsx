import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import "./header.css";

function Header() {
  return (
    <>
      <div className="blue-bar">
        <div className="logo">Trinity</div>
        <div className="tabs">
          <div className="tab">How we work</div>
          <div className="tab">Our team</div>
          <div className="tab">Contact Us</div>
        </div>
        <div className="button">
          <button>Sign In</button>
        </div>
      </div>
    </>
  );
}

export default Header;
