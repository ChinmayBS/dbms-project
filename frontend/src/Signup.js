import "./SignUp.css";
import React, { useState } from "react";
export default function Signup(props) {
  // Declare a new state variable, which we'll call "count"
  const [toggleClass, setClass] = useState("signup--container");

  const changeToChefSignup = (params) => {
    setClass("signup--container");
  };

  const changetoCustomerSignup = (params) => {
    setClass("signup--container right-panel-active");
  };

  return (
    <div className={toggleClass} id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Sign Up for Customer</h1>

          <input type="text" placeholder="Name" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign Up for Shop Keeper</h1>
          <input type="text" placeholder="Username" />

          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="password" placeholder="Password" />

          <button>Sign Up</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Hello, Chef</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signIn" onClick={changeToChefSignup}>
              Sign Up
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Food Lover!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button
              className="ghost"
              id="signUp"
              onClick={changetoCustomerSignup}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
