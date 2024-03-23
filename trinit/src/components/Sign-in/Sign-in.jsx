import { Link } from "react-router-dom";
import "./sign-in.css";
import { useState } from "react";

function SignIn() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <main>
        <div className="logo">Trinity</div>
        <form>
          <div className="container">
            <div className="heading">Email:</div>
            <input
              placeholder="Enter your email address"
              type="email"
              class="email-input"
              required
            />
            <div className="heading">Password:</div>
            <input
              placeholder="Enter your password"
              type="password"
              class="password-input"
              required
            />
          </div>
          <button type="submit" onClick={() => setIsLogged(true)}>
            <Link to="/">Submit</Link>
          </button>
        </form>
        <div className="new-acc">
          <Link to="/signUp">Create new Account</Link>
        </div>
      </main>
    </>
  );
}

export default SignIn;
