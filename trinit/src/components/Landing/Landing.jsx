import Header from "../Header/Header";
import imagesrc from "./landing.png";
import React, { useEffect, useState } from 'react';
import "./landing.css";
import {collection, getFirestore} from "firebase/firestore";
import "firebase/app";
import "firebase/firestore";
import { firestore } from "../../../database";

function Landing() {
  return (
    <>
      <Header />
      <main>
        <div className="some-thing">
          <div className="Heading">Microloans at your fingertips</div>
          <div className="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <img src={imagesrc} alt="image" />
      </main>
    </>
  );
}

export default Landing;
