import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./HomePage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import ProductInfo from "./foodApp/ProductInfo";
import NavBar from "./NavBar";
import FoodApp from "./foodApp/FoodApp";
import ShopPage from "./foodApp/ShopPage";
import Contact from "./Contact";

ReactDOM.render(
  <Router>
    <NavBar />
    <Route path="/" exact component={HomePage}></Route>

    <Route path="/login" exact component={Login}></Route>
    <Route path="/signup" exact component={Signup}></Route>

    <Route path="/shop-page" exact component={ShopPage}></Route>
    <Route path="/food-app/productpage" exact component={ProductInfo}></Route>

    <Route path="/food-app" exact component={FoodApp}></Route>

    <Route path="/contact" exact component={Contact}></Route>
    <Route path="/about" exact component={About}></Route>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
