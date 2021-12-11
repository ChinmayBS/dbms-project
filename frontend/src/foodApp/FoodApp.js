import { Redirect } from "react-router";
import ShopComponent from "../components/ShopComponent";
import "../config";
import React from "react";
export default function foodApp() {
  // console.log(global.config);
  if (!global.config.authorize.customer) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <main>
      <nav className="navigation">
        <a href="">Home </a>
        <a href="">Favourite</a>
        <a href="">Cart</a>
        <div className="search">
          <input type="search" id="search" placeholder="Search" />
          <span className="fa fa-search"></span>
        </div>
      </nav>

      <div>
        <h3 id="shop"> Shops</h3>
      </div>

      <div className="first-stack">
        <p> Showing 1-12 of 44 results</p>
        <div>
          <p id="sort">
            {" "}
            Default sorting
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </p>
          <div className="shop-sort">
            <a href=""> veg</a>
            <a href=""> non-veg</a>
          </div>
        </div>
      </div>

      <aside className="container_cart">
        <ShopComponent></ShopComponent>

        <ShopComponent></ShopComponent>
        <ShopComponent></ShopComponent>
        <ShopComponent></ShopComponent>
        <ShopComponent></ShopComponent>
        <ShopComponent></ShopComponent>
        <ShopComponent></ShopComponent>
        <ShopComponent></ShopComponent>
        <ShopComponent></ShopComponent>
        <ShopComponent></ShopComponent>
        <ShopComponent></ShopComponent>
        <ShopComponent></ShopComponent>
        <ShopComponent></ShopComponent>
      </aside>
    </main>
  );
}
