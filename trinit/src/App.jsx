import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import SignIn from "./components/Sign-in/Sign-in";
import SignUp from "./components/Sign-Up/Sign-up";
import Lend from "./components/Lend/Lend";
import LendDetails from "./components/LendDetails/LendDetails";
import Borrow from "./components/Borrow/Borrow";
import BorrowDetais from "./components/BorrowDetails/BorrowDetails";
import Pay1 from "./components/Pay1/Pay1";
import Pay2 from "./components/Pay2/Pay2";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import Success from "./components/Success/Success";

export default function App() {
  return (
    <>
      <ThirdwebProvider
        activeChain="sepolia"
        clientId="1e0827a6926e39bddcba11b1fdc0439fD" // You can get a client id from dashboard settings
      >
        <Component />
      </ThirdwebProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="lend" element={<Lend />} />
          <Route path="lendDetails" element={<LendDetails />} />
          <Route path="borrow" element={<Borrow />} />
          <Route path="borrowDetails" element={<BorrowDetais />} />
          <Route path="pay1" element={<Pay1 />} />
          <Route path="pay2" element={<Pay2 />} />
          <Route path="success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Component() {
  const { contract, isLoading } = useContract(
    "0x73e59F2D84dD4aBb9a88FE829f91b889453B2763"
  );
}
