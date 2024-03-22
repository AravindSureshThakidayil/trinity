import Header from "../Header/Header";
import "./borrowDetails.css";

function BorrowDetais() {
  return (
    <>
      <Header />
      <div className="heading-borrow">Details of Request</div>
      <div className="subheading-borrow">Amount Requested: Rs. 1000</div>
      <div className="subheading-borrow">Status of request: Recieved full</div>
      <div className="subheading-borrow">Status of Payback: Rs. 400</div>
      <div className="subheading-borrow">Period of loan: 3 months</div>
    </>
  );
}

export default BorrowDetais;
