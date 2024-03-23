import { useState } from "react";
import "./lendDetails.css";
import Header from "../Header/Header";

function LendDetails() {
  const [documents, setDocuments] = useState([]);

  const fetchDocuments = async () => {
    try {
      const snapshot = collection(firestore, "/users");
      const documentsData = snapshot.docs.map(doc => doc.data());
      setDocuments(documentsData);
    } catch (error) {
      console.error('Error fetching documents: ', error);
    }
  };

  fetchDocuments();

  return (
    <>
      <Header />
      <div className="container-len-req">
        <div className="heading-len-req">Sivanandan's Request</div>
        <div className="subheading-len-req">Requested amount:</div>
        <div className="corres-value">1000</div>
        <div className="subheading-len-req">Date:</div>
        <div className="corres-value">15/12/2004</div>
        <div className="subheading-len-req">Details of request:</div>
        <div className="corres-value">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibul
          ante vitae risus laoreet, id interdum sapien fermentum. Nulla
          facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibul ante vitae risus laoreet, id interdum sapien fermentum.
        </div>
        <div className="smaller-containers">
          <div className="subheading-row">
            <div className="subheading-len-req">Mode of repayment:</div>
            <div className="subheading-len-req">Score of the user:</div>
          </div>
          <div className="corres-value-row">
            <div className="corres-value-small-containers">
              3 Months - 12% interest
            </div>
            <div className="corres-value-small-containers">88/100</div>
          </div>
        </div>
      </div>
      <button class="green-button">Lend money</button>
    </>
  );
}

export default LendDetails;
