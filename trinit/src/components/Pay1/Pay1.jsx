import { Link } from "react-router-dom";
import "./pay1.css";

function Pay1() {
  return (
    <>
      <div className="heading-pay1">Trinity</div>
      <div className="inputvalues">
        <div className="subheading">Loan Number</div>
        <div className="input-rect">1</div>

        <div className="subheading">Amount</div>

        <div className="input-rect">1000</div>
        <div className="subheading">Time period</div>
        <div className="input-rect">3 months</div>

        <div className="subheading">Address of receiver:</div>
        <div className="input-rect">sdfwyegywyyeisurywioui</div>
        <button>
          <Link to="/pay2">Proceed</Link>
        </button>
      </div>
    </>
  );
}

export default Pay1;
