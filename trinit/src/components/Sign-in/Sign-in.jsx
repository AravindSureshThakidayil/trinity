import { Link } from "react-router-dom";
import "./sign-in.css";
import { useState } from "react";
import "../../../database.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [isLogged, setIsLogged] = useState(false);
  // var email, password;
  const auth = getAuth();

  return (
    <>
      <main>
        <div className="logo">Trinity</div>
        <form>
          <div className="container">
            <div className="heading">Email:</div>
            <input
              placeholder="Enter your email address"
              type="email" id="email"
              className="email-input"
              required
            />
            <div className="heading">Password:</div>
            <input
              placeholder="Enter your password"
              type="password" id="password"
              className="password-input"
              required
            />
          </div>
          <button type="button" onClick={() => {
            setIsLogged(true);
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            console.log(email," ",password)
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                const user = userCredential.user;
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error " + errorCode + "\n" + errorMessage);
              });

          }}>
            <Link>Submit</Link>
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
