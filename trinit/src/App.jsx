import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import SignIn from "./components/Sign-in/Sign-in";
import SignUp from "./components/Sign-Up/Sign-up";
import Lend from "./components/Lend/Lend";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="lend" element={<Lend />} />
      </Routes>
    </BrowserRouter>
  );
}
