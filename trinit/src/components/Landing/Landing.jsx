import Header from "../Header/Header";
import imagesrc from "./landing.png";
import React, { useEffect, useState } from 'react';
import "./landing.css";
import {collection, getFirestore} from "firebase/firestore";
import "firebase/app";
import "firebase/firestore";
import { firestore } from "../../../database";

function Landing() {
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
      <main>
        <div className="some-thing">
          <div className="Heading">Microloans at your fingertips</div>
          <div className="body">
            <ul>
            {documents.map((document, index) => (
              <li key={index}>{document.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <img src={imagesrc} alt="image" />
      </main>
    </>
  );
}

export default Landing;
