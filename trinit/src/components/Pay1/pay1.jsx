import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./pay1.css";
import getLoan from "../SmartContract/SmartContract";

function Pay1() {
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

export default Pay1;
