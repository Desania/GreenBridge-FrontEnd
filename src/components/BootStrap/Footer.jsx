
import React from 'react';
import github from "../Pics/github.png";
import inst from "../Pics/inst.png";
import twit from "../Pics/twit.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FooterCSS.css"

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Services</h3>
          <br />
          <p>Direct Sales</p>
          <p>Order Management</p>
          <p>Marketing Support</p>
          <p>Direct Communication</p>
          <p>Customer Support</p>
          <p>Loyalty Programs</p>
        </div>

        <div className="footer-section">
          <h3>About Us</h3>
          <br />
          <p>
            It is an innovative platform that addresses the needs 
            of growers (farmers) who may find themselves
            in a situation where they did not receive as much money as they
            deserve due to intermediaries. My project acts as a bridge 
            between growers (farmers) and direct customers so that growers 
            (farmers) can sell their products directly.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <br />
          <p>
            Bathinda, Punjab
            <br />
            Email Id : gargdesania@gmail.com
            <br />
            Phone No. +91 7973406533
          </p>
        </div>

        <div className="footer-section footer-social">
          <h3></h3>
          <br />
          <p>
            <img src={github} alt="github" className="social-icon" />
            <img src={inst} alt="instagram" className="social-icon" />
            <img src={twit} alt="twitter" className="social-icon" />
          </p>
        </div>
      </div>
      <p className="footer-copyright">
        &#169; All Rights Are Reserved..
      </p>
    </div>
  );
}

export default Footer;
