import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./pay2.css";
import getLoan from "../SmartContract/SmartContract";

function Pay2() {
  const handlePayButtonClick = () => {
    getLoan(
      "4",
      "0x814FaE9f487206471B6B0D713cD51a2D35980000",
      "0x763c396673F9c391DCe3361A9A71C8E161388000",
      1000,
      12,
      "0x763c396673F9c391DCe3361A9A71C8E161388000"
    );
    console.log("hey");
  };

  return (
    <>
      <div className="heading-pay2">Trinity</div>
      <div className="inputvalues">
        <div className="subheading">Select Wallet:</div>
        <select>
          <option>Choose your wallet</option>
          <option>Metamask</option>
          <option>Other options</option>
        </select>
        <div className="subheading">Wallet Id:</div>
        <input type="text" required />
        <div className="subheading">Payable Amount:</div>
        <div className="input-rect">3.14 ETH</div>
        <button onClick={handlePayButtonClick}>
          <Link to="/success">Pay</Link>
        </button>
      </div>
    </>
  );
}

export default Pay2;
