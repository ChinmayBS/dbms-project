import "./Login.css";
import React, { useState, useEffect } from "react";
import fetchTableData from "./lib/fetchUsersTable";
import { Route, useHistory } from "react-router";
import "./config";
import config from "./config";

export default function Login(props) {
  const history = useHistory();
  // Declare a new state variable, which we'll call "count"
  const [toggleClass, setClass] = useState("login--container");
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to our app");
  const [alert, setAlert] = useState(" ");

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

  const handleWrongLogin = (event) => {
    setWelcomeMessage("You entered wrong password!!!");
    setAlert("alert alert-warning");
    event.target[0].value = "";
    event.target[1].value = "";
    setTimeout(() => {
      setAlert(" ");
      setWelcomeMessage("Welcome to our App!!!");
    }, 2000);
  };
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
      // console.log(" Login sucesss!!!! shopkeeper");
      // <Route path="/login/shop-page" component={ShopPage}></Route>;
      history.push("/shop-page");
      config.authorize.shopKeeper = true;
      console.log(" Sign in sucess: ");
    } else if (flag == 0) {
      handleWrongLogin(event);
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
      history.push("/food-app");
      config.authorize.customer = true;
    } else if (flag == 0) {
      handleWrongLogin(event);
    }
  };

  return (
    <div className="body">
      <div className={alert + " welcome_msg"}>{welcomeMessage} </div>
      <div className={toggleClass} id="container">
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
