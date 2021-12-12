import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact-us">
      <div className="row">
        <h1>Contact Us</h1>
      </div>
      <div className="row">
        <h4>We'd love to hear from you!</h4>
      </div>
      <div className="row input-container">
        {/* <div className="col-xs-12"> */}
          <div className="styled-input wide" id="wide">
            <input className="full-name" type="text" required placeholder="Full Name" />
            
          </div>
        {/* </div> */}
        <div className="col-md-6 col-sm-12">
          <div className="styled-input">
            <input type="text" required />
            <label>Address</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input">
            <input type="text" required />
            <label>Phone Number</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide" id="wide">
            <textarea required></textarea>
            <label>Message</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="btn-lrg submit-btn">Send Message</div>
        </div>
      </div>
    </div>
  );

}
