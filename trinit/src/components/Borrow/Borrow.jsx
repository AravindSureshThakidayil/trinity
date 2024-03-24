import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Borrow() {
  return (
    <>
      <Header />
      <div className="headinglending">Active loans</div>
      <div className="subheadinglending">Your requests</div>
      <div className="glassbarslending">
        <div className="glassbarlending">
          <div className="money">Rs. 1000</div>
          <div className="date-and-name">
            <div className="date">Date: dd/mm/yyyy</div>
            <div className="name">Status: Ongoing</div>
          </div>
          <div className="bar-and-score">
            <div className="bar"></div>
            <div className="score">Paid: 400/1000</div>
          </div>
          <div className="time-and-more">
            <div className="time">5 sec ago</div>
            <div className="more"><Link to="/borrowDetails">Details</Link></div>
            <div className="more"><Link to="/pay2">Pay</Link></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Borrow;
