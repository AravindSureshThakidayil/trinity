import "./lend.css";
import Header from "../Header/Header";
import { firestore } from "../../../database";

function Lend() {
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
      <div className="headinglending">Lending</div>
      <div className="subheadinglending">Live requests</div>

      {documents.map((document, index) => (
              <div className="glassbarslending">
                <div className="glassbarlending">
                  <div className="money">Rs. {document.amount}</div>
                  <div className="date-and-name">
                    <div className="date">Date: {document.date}</div>
                    <div className="name">Name: {document.buyer}</div>
                    <div className="bar-and-score">
                      <div className="bar"></div>
                      <div className="score">88/100</div>
                    </div>
                    <div className="time-and-more">
                      <div className="time">5 sec ago</div>
                      <div className="more">Details</div>
                    </div>
                  </div>
                </div>
              </div>
      ))}
  </>);
      {/* <div className="glassbarslending">
        <div className="glassbarlending">
          <div className="money">Rs. 1000</div>
          <div className="date-and-name">
            <div className="date">Date: dd/mm/yyyy</div>
            <div className="name">Name: Sivanandan R</div>
          </div>
          <div className="bar-and-score">
            <div className="bar"></div>
            <div className="score"></div>
          </div>
          <div className="time-and-more">
            <div className="time">5 sec ago</div>
            <div className="more">Details</div>
          </div>
        </div>

        <div className="glassbarlending">
          <div className="money">Rs. 1000</div>
          <div className="date-and-name">
            <div className="date">Date: dd/mm/yyyy</div>
            <div className="name">Name: Sivanandan R</div>
          </div>
          <div className="bar-and-score">
            <div className="bar"></div>
            <div className="score">88/100</div>
          </div>
          <div className="time-and-more">
            <div className="time">5 sec ago</div>
            <div className="more">Details</div>
          </div>
        </div>

        <div className="glassbarlending">
          <div className="money">Rs. 1000</div>
          <div className="date-and-name">
            <div className="date">Date: dd/mm/yyyy</div>
            <div className="name">Name: Sivanandan R</div>
          </div>
          <div className="bar-and-score">
            <div className="bar"></div>
            <div className="score">88/100</div>
          </div>
          <div className="time-and-more">
            <div className="time">5 sec ago</div>
            <div className="more">Details</div>
          </div>
        </div>

        <div className="glassbarlending">
          <div className="money">Rs. 1000</div>
          <div className="date-and-name">
            <div className="date">Date: dd/mm/yyyy</div>
            <div className="name">Name: Sivanandan R</div>
          </div>
          <div className="bar-and-score">
            <div className="bar"></div>
            <div className="score">88/100</div>
          </div>
          <div className="time-and-more">
            <div className="time">5 sec ago</div>
            <div className="more">Details</div>
          </div>
        </div>

        <div className="glassbarlending">
          <div className="money">Rs. 1000</div>
          <div className="date-and-name">
            <div className="date">Date: dd/mm/yyyy</div>
            <div className="name">Name: Sivanandan R</div>
          </div>
          <div className="bar-and-score">
            <div className="bar"></div>
            <div className="score">88/100</div>
          </div>
          <div className="time-and-more">
            <div className="time">5 sec ago</div>
            <div className="more">Details</div>
          </div>
        </div>

        <div className="glassbarlending">
          <div className="money">Rs. 1000</div>
          <div className="date-and-name">
            <div className="date">Date: dd/mm/yyyy</div>
            <div className="name">Name: Sivanandan R</div>
          </div>
          <div className="bar-and-score">
            <div className="bar"></div>
            <div className="score">88/100</div>
          </div>
          <div className="time-and-more">
            <div className="time">5 sec ago</div>
            <div className="more">Details</div>
          </div>
        </div>
      </div>
    </> */}
}

export default Lend;
