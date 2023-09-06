import React, { useState } from "react";
import Header from "../components/common/Header";
import SignupForm from "../components/SignupComponents/SignupForm.js/index.js";
import { useNavigate } from "react-router-dom";


function SignUpPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="input-wrapper">
        <h1>Signup</h1>
        <SignupForm /> 
        <p style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            Already have an Account? Click here to Login.
        </p>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default SignUpPage;
