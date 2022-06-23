import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import "./NavBar.scss";

import OverlayMenu from "../OverlayMenu/OverlayMenu";
import "./MenuIcon";
import logo from "./assets/deptlogo.png";
import MenuIcon from "./MenuIcon";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logo" src={logo} alt="deptlogo" />
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="/">WORK</a>
        </li>
        <li className="nav-item">
          <a href="/">CULTURE</a>
        </li>
        <li className="nav-item">
          <a href="/">SERVICES</a>
        </li>
        <li className="nav-item">
          <a href="/">INSIGHTS</a>
        </li>
        <li className="nav-item">
          <a href="/">CAREERS</a>
        </li>
        <li className="nav-item">
          <a href="/">CONTACT</a>
        </li>
      </ul>
      <div className="hamburger">
        <BsThreeDots />
      </div>
    </div>
  );
};

export default NavBar;

// const [showMenu, setShowMenu] = useState(false);

//   let overlay;

//   if (showMenu) {
//     overlay = (
//       <div className="overlay-menu" id="overlay">
//         <OverlayMenu />
//       </div>
//     );
//   }

//   return (
//     <div className="navbar">
//       <img className="logo" src={logo} alt="deptlogo" />
//       <div className="menu">
//         <ul>
//           <li>WORK</li>
//           <li>CULTURE</li>
//           <li>SERVICES</li>
//           <li>INSIGHTS</li>
//           <li>CAREERS</li>
//           <li>CONTACT</li>
//         </ul>
//       </div>
//       <ul>
//         <li onClick={() => setShowMenu(!showMenu)}>
//           <MenuIcon />
//         </li>
//         {overlay}
//       </ul>
//     </div>
//   );
