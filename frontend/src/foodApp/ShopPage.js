import "../config";
import { Redirect } from "react-router";
import React, { useState, useEffect } from "react";
import "./ShopPage.css";
import "../config";
import axios from "axios";

export default function ShopPage() {
  const [shop, setShop] = useState({
    shopKeeperId: global.config.authorize.shopKeeperId,
    shopName: "",
    shopType: "",
    phoneNumber: "",
    latitude: "",
    longitude: "",
    shopImage: null,
    shopMenu: null,
    submitButton: "ADD MY SHOP",
  });

  const getShopDetails = (shopData) => {
    const shopDetails = {
      shopKeeperId: global.config.authorize.shopKeeperId,
      shopName: "",
      shopType: "",
      phoneNumber: "",
      latitude: "",
      longitude: "",
      shopImage: null,
      shopMenu: null,
      submitButton: "ADD MY SHOP",
    };
    console.log(shopData);
    if (shopData === null) {
      return shopDetails;
    }
    shopDetails.shopName = shopData.data.attributes.shop_name;
    shopDetails.shopType = shopData.data.attributes.shop_type;
    shopDetails.phoneNumber = 9019284182;
    shopDetails.longitude = shopData.data.attributes.longitude;
    shopDetails.latitude = shopData.data.attributes.latitude;
    shopDetails.shopMenu =
      shopData.data.attributes.shop_menu.data.attributes.url;
    shopDetails.shopImage =
      shopData.data.attributes.shop_image.data.attributes.url;
    shopDetails.submitButton = "EDIT DETAILS ";

    console.log(shopDetails);
    return shopDetails;
  };
  let url = "http://localhost:1337/";
  let shopUrl = `http://localhost:1337/api/app-users/${global.config.authorize.shopKeeperId}/?populate[shop][populate]=*`;
  useEffect(() => {
    axios.get(shopUrl).then((resp) => {
      setShop(resp.data.data.attributes.shop);
      const shopDetails = getShopDetails(resp.data.data.attributes.shop);
      setShop(shopDetails);
    });
  }, []);

  if (!global.config.authorize.shopKeeper) {
    return <Redirect to="/"></Redirect>;
  }

  const addShop = () => {
    axios.post(
      `http://localhost:1337/api/app-users/${global.config.authorize.shopKeeperId}/?populate[shop][populate]=*`,
      {
        data: {
          shop_name: {
            data: {
              shop_name: "abc abc abc",
              shop_type: "chats",
              phone_number: 9019284182,
              longitude: 10,
              longitude: 10,
            },
          },
        },
      }
    );
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <form action=" " method="post" onSubmit={addShop}>
            <h1> Add Shop Details </h1>

            <fieldset>
              <legend>
                <span className="number">1</span> Basic Info
              </legend>

              <label htmlFor="shop-name">Shop Name:</label>
              <input
                value={shop.shopName}
                required
                type="text"
                id="shop-name"
                shop-name="user_name"
              />

              <label htmlFor="job">Shop Type:</label>
              <select id="job" name="user_job" value={shop.shopType}>
                <optgroup>
                  <option value="chats">Chats</option>
                  <option value="beverages">Beverages</option>
                  <option value="meals-veg">Meals veg</option>
                  <option value="meals-non-veg">Meals non-veg</option>
                  <option value="web_designer">Other</option>
                </optgroup>
              </select>

              <label htmlFor="phone-no">Phone no:</label>
              <input
                value={shop.phoneNumber}
                required
                type="tel"
                id="phone-no"
                name="user_phone"
              />
            </fieldset>
            <fieldset>
              <legend>
                <span className="number">2</span> Other Detials
              </legend>

              <label htmlFor="bio">Shop Location</label>
              <input
                value={shop.latitude}
                required
                type="text"
                id="shop-name"
                shop-name="user_name"
                placeholder="latitude"
              />
              <input
                value={shop.longitude}
                required
                type="text"
                id="shop-name"
                shop-name="user_name"
                placeholder="longitude"
              />

              <label htmlFor="shop-image">Upload a shop Image</label>
              <input
                // value={url + shop.shopImage}
                required
                type="file"
                id="shop-image"
                name="filename"
                accept="image/png, image/jpeg"
              />

              <label className="menu-image" htmlFor="menu-image">
                Upload menu for a shop
              </label>
              <input
                // value={shop.shopMenu}
                required
                type="file"
                id="shop-image"
                name="filename"
                accept="image/png, image/jpeg"
              />
            </fieldset>

            <button className="add-shop-button button" type="submit">
              {shop.submitButton}{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
