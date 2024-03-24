import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./pay2.css";
import "../SmartContract/SmartContract";

function Pay2() {
  const [walletId, setWalletId] = useState(""); // State to store the wallet ID
  const [paymentAmount, setPaymentAmount] = useState(0); // State to store the payment amount

  useEffect(() => {
    // Initialize MetaMask on component mount
    initializeMetaMask();
  }, []);

  const initializeMetaMask = async () => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      try {
        // Request access to MetaMask
        await window.ethereum.enable();
      } catch (error) {
        console.error("User denied access to MetaMask");
      }
    } else {
      console.error("MetaMask not found");
    }
  };

  const handlePayButtonClick = async () => {
    // Ensure wallet ID is provided
    if (!walletId) {
      alert("Please enter your wallet ID");
      return;
    }

    // Ensure payment amount is valid
    if (paymentAmount <= 0) {
      alert("Please enter a valid payment amount");
      return;
    }

    try {
      // Call the getLoan function to initiate payment
      const result = await getLoan(
        "4",
        "0x814FaE9f487206471B6B0D713cD51a2D35980000",
        "0x763c396673F9c391DCe3361A9A71C8E161388000",
        paymentAmount,
        12,
        "brooooo"
      );

      console.log("Payment successful:", result);

      // Redirect to success page programmatically
      // You can use React Router's history object for this purpose
      // history.push("/success");
    } catch (error) {
      console.error("Payment failed:", error);
      // Handle payment failure
    }
  };

  return (
    <>
    <div className="container">
      <div>
      <div className="heading-pay2">Trinity</div>
      <div className="inputvalues">
        <div className="subheading">Select Wallet:</div>
        <select>
          <option>Choose your wallet</option>
          <option>Metamask</option>
          <option>Other options</option>
        </select>
        <div className="subheading">Wallet Id:</div>
        <input
          type="text"
          value={walletId}
          onChange={(e) => setWalletId(e.target.value)}
          required
        />
        <div className="subheading">Payable Amount:</div>
        <div className="input-rect">
          <input
            type="number"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(parseFloat(e.target.value))}
            required
          />
          ETH
        </div>
        <Link to="/success">
          <button onClick={handlePayButtonClick}>Pay</button>
        </Link>
        {/* Wrap the whole div with Link if needed */}
        {/* <Link to="/success">
          <div>
            <button onClick={handlePayButtonClick}>Pay</button>
          </div>
        </Link> */}
      </div>
      </div>
      </div>
    </>
  );
}

export default Pay2;
