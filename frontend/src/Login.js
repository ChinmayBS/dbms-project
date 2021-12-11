import "./Login.css";
import React, { useState, useEffect } from "react";
import fetchTableData from "./lib/fetchUsersTable";

export default function Login(props) {
  // Declare a new state variable, which we'll call "count"
  const [toggleClass, setClass] = useState("login--container");

  const changeToChefSignup = (params) => {
    setClass("login--container");
  };

  const changetoCustomerSignup = (params) => {
    setClass("login--container right-panel-active");
  };

  const [users, setUsers] = useState([]);
  const [customers, setCustomers] = useState([]);

  const appUsersTableUrl = "http://localhost:1337/api/app-users";
  const customersTableUrl = "http://localhost:1337/api/customers";

  useEffect(() => {
    let data = fetchTableData(appUsersTableUrl);
    data.then((resp) => {
      setUsers(resp);
    });
  }, []);

  useEffect(() => {
    let data = fetchTableData(customersTableUrl);
    data.then((resp) => {
      setCustomers(resp);
    });
  }, []);

  const shopKeeperSignin = (event) => {
    event.preventDefault();
    // console.log(event);
    let userName, password;
    userName = event.target[0].value;
    password = event.target[1].value;
    // console.log(userName, password);
    let flag = 0;

    users.forEach((user) => {
      if (
        user.attributes.user_name === userName &&
        user.attributes.password === password
      )
        flag = 1;
    });

    if (flag == 1) {
      console.log(" Login sucesss!!!! shopkeeper");
      //TODO: go to next page
    } else if (flag == 0) {
      // TODO: Wrong password display
      console.log(" Wrong password^^^^ shopkeeper");
    }
  };

  const customerSignin = (event) => {
    event.preventDefault();
    // console.log(event);
    let userName, password;
    userName = event.target[0].value;
    password = event.target[1].value;
    // console.log(userName, password);
    let flag = 0;

    customers.forEach((customer) => {
      if (
        customer.attributes.name === userName &&
        customer.attributes.password === password
      )
        flag = 1;
    });

    if (flag == 1) {
      //TODO: go to next page
      console.log(" Login sucesss!!!! customer");
    } else if (flag == 0) {
      // TODO: Wrong password display
      console.log(" Wrong password^^^^ customer");
    }
  };

  return (
    <div className="body">
      <div className={toggleClass} id="container">
        <div>Welcome to our app </div>

        <div className="form-container sign-up-container">
          <form action="#" onSubmit={customerSignin}>
            <h1>Sign In for Customer</h1>

            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" onSubmit={shopKeeperSignin}>
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
