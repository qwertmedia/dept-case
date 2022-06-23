import React from "react";
import "./Footer.scss";
import logo from "./assets/deptlogo.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer-menu">
        <img className="logo" id="footer-logo" src={logo} alt="deptlogo" />

        <ul>
          <li>WORK</li>
          <li>CULTURE</li>
          <li>SERVICES</li>
          <li>INSIGHTS</li>
          <li>CAREERS</li>
          <li>CONTACT</li>
        </ul>
      </div>

      <div className="footer-info">
        <div className="column">
          <p className="company-info">Chamber of Commerce: 63464101</p>
        </div>
        <div className="column">
          <p className="company-info">VAT: NL8522.47.502.B01</p>
        </div>
        <div className="column">
          <p className="company-info">Terms and conditions</p>
        </div>
        <div className="column">
          <p className="company-info">©2022 Dept Agency</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
