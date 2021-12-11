import "./ShopComponents.css";

export default function ShopComponent() {
  return (
    <div className="items-stack" id="items-list">
      <img src="https://www.linkpicture.com/q/WhatsApp-Image-2021-11-01-at-6.11.44-PM.jpeg" />
      <p class="shopcomponent_shop_info">
        <div className="shop_info">
          <div className="shop_name">Shop Name is displyed here</div>
          <div className="shop_tag">tag: veg</div>
        </div>
        <div className="shop_info">
          <div className="rating">Rating: ***** </div>
          <div className="phone_no">Phone number: 9019284182</div>
        </div>
      </p>
    </div>
  );
}
