import Header from "../Header/Header";

function Borrow() {
  return (
    <>
      <Header />
      <div className="headinglending">Borrowing</div>
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
            <div className="more">Details</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Borrow;
