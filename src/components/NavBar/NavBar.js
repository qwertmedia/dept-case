import React, { useState } from "react";
import "./NavBar.scss";

import OverlayMenu from "../OverlayMenu/OverlayMenu";
import "./MenuIcon";
import logo from "./assets/deptlogo.png";
import MenuIcon from "./MenuIcon";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  let overlay;

  if (showMenu) {
    overlay = (
      <div className="overlay-menu" id="overlay">
        <OverlayMenu />
      </div>
    );
  }

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="deptlogo" />
      <div className="menu">
        <ul>
          <li>WORK</li>
          <li>CULTURE</li>
          <li>SERVICES</li>
          <li>INSIGHTS</li>
          <li>CAREERS</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <ul>
        <li onClick={() => setShowMenu(!showMenu)}>
          <MenuIcon />
        </li>
        {overlay}
      </ul>
    </div>
  );
};

export default NavBar;
