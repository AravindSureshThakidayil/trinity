import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate(); // Corrected: useNavigate instead of navigator

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    // Clear timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, [navigate]); // Added navigate as dependency to useEffect

  return (
    <>
      <div className="heading-pay2">Trinity</div>
      <div className="show-success">Payment Successfully Done</div>
    </>
  );
}

export default Success;
