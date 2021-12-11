import "../config";
import { Redirect } from "react-router";
import React from "react";
import "./FoodApp.css";

export default function ShopPage() {
  if (!global.config.authorize.shopKeeper) {
    return <Redirect to="/"></Redirect>;
  }
  return;
}
