import "./lend.css";
import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import Header from "../Header/Header";
import { firestore } from "../../../database";
import { Link } from "react-router-dom";

// function Lend() {
//   // const [techList, setTechList] = useState([]);
//   // const q = query(collection(firestore, "cities"), where("capital", "==", true));

//   // const getDocs = async () => {
//   //   var docs = await getDocs(q);
//   //   var loans = [];

//   //   documents.forEach(document => {
//   //     loans.push(document.data())
//   //   });

//   //   return loans;
//   // }
//   // const loans = getDocs();
  
//   return (
//     <>
//       {/* <Header />
//       <div className="headinglending">Lending</div>
//       <div className="subheadinglending">Live requests</div>

//       {loans.map((document, index) => (
//               <div className="glassbarslending">
//                 <div className="glassbarlending">
//                   <div className="money">Rs. {document.data().amount}</div>
//                   <div className="date-and-name">
//                     <div className="date">Date: {document.data().date}</div>
//                     <div className="name">Name: {document.data().buyer}</div>
//                     <div className="bar-and-score">
//                       <div className="bar"></div>
//                       <div className="score">88/100</div>
//                     </div>
//                     <div className="time-and-more">
//                       <div className="time">5 sec ago</div>
//                       <div className="more"><Link to="/lendDetails">Details</Link></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//       ))}

//   </>); */}
//       <div className="glassbarslending">
//         <div className="glassbarlending">
//           <div className="money">Rs. 1000</div>
//           <div className="date-and-name">
//             <div className="date">Date: dd/mm/yyyy</div>
//             <div className="name">Name: Sivanandan R</div>
//           </div>
//           <div className="bar-and-score">
//             <div className="bar"></div>
//             <div className="score">88/100</div>
//           </div>
//           <div className="time-and-more">
//             <div className="time">5 sec ago</div>
//             <div className="more"><Link to="/lendDetails">Details</Link></div>
//           </div>
//         </div>

//         <div className="glassbarlending">
//           <div className="money">Rs. 1000</div>
//           <div className="date-and-name">
//             <div className="date">Date: dd/mm/yyyy</div>
//             <div className="name">Name: Sivanandan R</div>
//           </div>
//           <div className="bar-and-score">
//             <div className="bar"></div>
//             <div className="score">88/100</div>
//           </div>
//           <div className="time-and-more">
//             <div className="time">5 sec ago</div>
//             <div className="more"><Link to="/lendDetails">Details</Link></div>
//           </div>
//         </div>

//         <div className="glassbarlending">
//           <div className="money">Rs. 1000</div>
//           <div className="date-and-name">
//             <div className="date">Date: dd/mm/yyyy</div>
//             <div className="name">Name: Sivanandan R</div>
//           </div>
//           <div className="bar-and-score">
//             <div className="bar"></div>
//             <div className="score">88/100</div>
//           </div>
//           <div className="time-and-more">
//             <div className="time">5 sec ago</div>
//             <div className="more"><Link to="/lendDetails">Details</Link></div>
//           </div>
//         </div>

//         <div className="glassbarlending">
//           <div className="money">Rs. 1000</div>
//           <div className="date-and-name">
//             <div className="date">Date: dd/mm/yyyy</div>
//             <div className="name">Name: Sivanandan R</div>
//           </div>
//           <div className="bar-and-score">
//             <div className="bar"></div>
//             <div className="score">88/100</div>
//           </div>
//           <div className="time-and-more">
//             <div className="time">5 sec ago</div>
//             <div className="more"><Link to="/lendDetails">Details</Link></div>
//           </div>
//         </div>

//         <div className="glassbarlending">
//           <div className="money">Rs. 1000</div>
//           <div className="date-and-name">
//             <div className="date">Date: dd/mm/yyyy</div>
//             <div className="name">Name: Sivanandan R</div>
//           </div>
//           <div className="bar-and-score">
//             <div className="bar"></div>
//             <div className="score">88/100</div>
//           </div>
//           <div className="time-and-more">
//             <div className="time">5 sec ago</div>
//             <div className="more"><Link to="/lendDetails">Details</Link></div>
//           </div>
//         </div>

//         <div className="glassbarlending">
//           <div className="money">Rs. 1000</div>
//           <div className="date-and-name">
//             <div className="date">Date: dd/mm/yyyy</div>
//             <div className="name">Name: Sivanandan R</div>
//           </div>
//           <div className="bar-and-score">
//             <div className="bar"></div>
//             <div className="score">88/100</div>
//           </div>
//           <div className="time-and-more">
//             <div className="time">5 sec ago</div>
//             <div className="more"><Link to="/lendDetails">Details</Link></div>
//           </div>
//         </div>
//       </div>
//     </>
// )}

const Lend = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const snapshot = query(collection(firestore, "/loans"), where("active", 
      "==", true));
      const postsData = snapshot.docs.map(doc => ({
         id: doc.id,
         ...doc.data()
      }));
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>Amount: {post.amount}</p>
          <p>Borrower: {post.borrower}</p>
        </div>
      ))}
    </div>
  );
};

// export default YourComponent;

export default Lend;
