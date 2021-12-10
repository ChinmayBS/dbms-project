import React, { useState, useEffect } from "react";
import axions from "axios";

import "./SignUp.css";
export default function Signup(props) {
  // Declare a new state variable, which we'll call "count"
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axions
      .get("http://localhost:1337/api/app-users")
      .then((res) => setUsers(res.data.data));
  }, []);

  const [toggleClass, setClass] = useState("signup--container");

  const changeToChefSignup = (params) => {
    setClass("signup--container");
  };

  const changetoCustomerSignup = (params) => {
    setClass("signup--container right-panel-active");
  };

  const shopKeeperSignUp = (event) => {
    event.preventDefault();
    let userName, firstName, lastName, password;
    userName = event.target[0].value;
    firstName = event.target[1].value;
    lastName = event.target[2].value;
    password = event.target[3].value;

    let flag = 0;
    users.forEach((user) => {
      if (user.attributes.user_name === userName) flag = 1;
    });

    if (flag == 0) {
      //  TODO: user signup sucessfully
      // ADD data to strapi
      axions.post("http://localhost:1337/api/app-users", {
        data: {
          first_name: "chinmay",
          last_name: "b s",
          date_of_birth: "2002-04-11",
          user_name: userName,
        },
      });
    } else {
      //  TODO: give warning that username already taken
    }
  };

  const customerSignup = () => {
    // console.log(users);
  };

  return (
    <div>
      <p className="wlecome button">Welcome to online shop</p>
      <div className={toggleClass} id="container">
        <div className="form-container sign-up-container">
          <form action="#" onSubmit={customerSignup}>
            <h1>Sign Up for Customer</h1>

            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" onSubmit={shopKeeperSignUp}>
            <h1>Sign Up for Shop Keeper</h1>
            <input type="text" placeholder="Username" />

            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="password" placeholder="Password" />

            <button>Sign Up</button>
          </form>
        </div>
        gn Up
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Hello, Chef</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signIn"
                onClick={changeToChefSignup}
              >
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
    </div>
  );
}
