import "./ShopComponents.css";
import React, { useState } from "react";

export default function ShopComponent(props) {
  const [shop, setShop] = useState(props);
  const appUrl = "http://localhost:1337";
  return (
    <div className="items-stack" id="items-list">
      <img src={appUrl + shop.shopImage} />
      <p className="shopcomponent_shop_info">
        <div className="shop_info">
          <div className="shop_name">Shop Name: {shop.shopName}</div>
          <div className="shop_tag">tag: {shop.shopType}</div>
        </div>
        <div className="shop_info">
          <div className="rating">Rating: {shop.rating} </div>
          <div className="phone_no">Phone number: 9019284182</div>
        </div>
      </p>
    </div>
  );
}
