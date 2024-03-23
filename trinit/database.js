// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore }  from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-RgphxL_nFeOuuOKumVtuhFtnFfUPuKs",
  authDomain: "trinity-recet.firebaseapp.com",
  projectId: "trinity-recet",
  storageBucket: "trinity-recet.appspot.com",
  messagingSenderId: "811322005310",
  appId: "1:811322005310:web:fddd64c92db9b28572fe6f",
  measurementId: "G-EQ82DH3X95"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// export default app;