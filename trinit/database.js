// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-RgphxL_nFeOuuOKumVtuhFtnFfUPuKs",
  authDomain: "trinity-recet.firebaseapp.com",
  projectId: "trinity-recet",
  storageBucket: "trinity-recet.appspot.com",
  messagingSenderId: "811322005310",
  appId: "1:811322005310:web:fddd64c92db9b28572fe6f",
  measurementId: "G-EQ82DH3X95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);