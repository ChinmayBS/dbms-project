import "./Login.css";
import React, { useState } from "react";
export default function Login(props) {
  // Declare a new state variable, which we'll call "count"
  const [toggleClass, setClass] = useState("login--container");

  const changeToChefSignup = (params) => {
    setClass("login--container");
  };

  const changetoCustomerSignup = (params) => {
    setClass("login--container right-panel-active");
  };

  return (
    <div className="body">
      <div className={toggleClass} id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Sign In for Customer</h1>

            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign In for Shop Keeper</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />

            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome back, Chef</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={changeToChefSignup}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Welcome back, Food Lover!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signUp"
                onClick={changetoCustomerSignup}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
