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

ReactDOM.render(
  <Router>
    <nav>This is nav Bar</nav>
    <Route path="/" exact component={HomePage}></Route>
    <Route path="/about" exact component={About}></Route>
    <Route path="/login" exact component={Login}></Route>
    <Route path="/signup" exact component={Signup}></Route>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
