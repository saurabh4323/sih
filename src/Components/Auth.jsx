import { SignIn } from "@clerk/clerk-react";
import React from "react";
import "./Auth.css";
import Navbar from "./Navbar";
const Auth = () => {
  return (
    <>
      {" "}
      {/* <Navbar></Navbar> */}
      <div className="containe">
        <div className="sign">
          <SignIn></SignIn>
        </div>
      </div>
    </>
  );
};

export default Auth;
