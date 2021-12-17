import { Redirect } from "react-router";
import ShopComponent from "../components/ShopComponent";
import "../config";
import React, { useState, useEffect } from "react";
import axions from "axios";
import "./FoodApp.css";
import { useHistory } from "react-router";

export default function FoodApp() {
  const history = useHistory();

  const shopUrl = "http://localhost:1337/api/shops/?populate=*";
  const [shops, setShops] = useState([]);

  const fetchShopsData = async () => {
    return await axions.get(shopUrl);
  };

  const getShopsData = (responseData) => {
    const shopsData = [];
    responseData.data.data.forEach((data) => {
      // console.log(data.attributes);
      const latitude = data.attributes.latitude;
      const longitude = data.attributes.longitude;
      const shopName = data.attributes.shop_name;
      const shopType = data.attributes.shop_type;
      const shopImage = data.attributes.shop_image.data.attributes.url;
      const shopMenu = data.attributes.shop_menu.data.attributes.url;
      const rating = data.attributes.rating;

      return shopsData.push({
        latitude,
        longitude,
        shopName,
        shopType,
        shopImage,
        shopMenu,
        rating,
      });
    });
    return shopsData;
  };
  useEffect(() => {
    fetchShopsData().then((responseData) => {
      console.log(responseData);
      const shopsData = getShopsData(responseData);
      // console.log(shopsData);
      setShops(shopsData);
      // console.log(shops);
    });
  }, []);

  const loadShopPage = (event) => {
    console.log(event);
    history.push("/food-app/productpage");
  };

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

      <aside onClick={loadShopPage} className="container_cart">
        {shops.map((shop) => (
          <ShopComponent {...shop}></ShopComponent>
        ))}
      </aside>
    </main>
  );
}
