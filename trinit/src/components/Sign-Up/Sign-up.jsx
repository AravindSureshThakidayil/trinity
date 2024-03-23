import "./sign-up.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function signUp() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <main>
        <div className="logo">Trinity</div>
        <form>
          <div className="container">
            <div className="heading">Name:</div>
            <input
              placeholder="Enter your name:"
              type="text"
              required
              className="name-input"
            />
            <div className="heading">Phone:</div>
            <input
              placeholder="Enter your phone number:"
              type="text"
              required
              className="phone-input"
            />
            <div className="heading">Email:</div>
            <input
              placeholder="Enter your Email:"
              type="email"
              required
              className="email-input"
            />
            <div className="heading">Password:</div>
            <input
              placeholder="Enter your password:"
              type="text"
              required
              className="password-input"
            />
          </div>
        </form>
        <div className="new-acc">
          <button type="submit" onClick={() => setIsLogged(true)}>
            <Link
              to="/"
              onClick={() => {
                setIsLogged(true);
              }}
            >
              Sign Up
            </Link>
          </button>
        </div>
      </main>
    </>
  );
}

export default signUp;
