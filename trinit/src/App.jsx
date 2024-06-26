import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import SignIn from "./components/Sign-in/Sign-in";
import SignUp from "./components/Sign-Up/Sign-up";
import Lend from "./components/Lend/Lend";
import LendDetails from "./components/LendDetails/LendDetails";
import Borrow from "./components/Borrow/Borrow";
import BorrowDetais from "./components/BorrowDetails/BorrowDetails";
import Pay2 from "./components/Pay2/Pay2";
import Success from "./components/Success/Success";
import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function App() {
  return (
    <ThirdwebProvider
      activeChain="ethereum"
      clientId="1e0827a6926e39bddcba11b1fdc0439f"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="lend" element={<Lend />} />
          <Route path="lendDetails" element={<LendDetails />} />
          <Route path="borrow" element={<Borrow />} />
          <Route path="borrowDetails" element={<BorrowDetais />} />
          <Route path="pay2" element={<Pay2 />} />
          <Route path="success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </ThirdwebProvider>
  );
}
