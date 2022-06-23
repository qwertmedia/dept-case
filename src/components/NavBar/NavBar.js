import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import "./NavBar.scss";

import logo from "./assets/deptlogo.png";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="logo">
        <img className="logo" src={logo} alt="deptlogo" />
      </div>
      <div className={click ? "main-menu active" : "main-menu"}>
        <ul>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Work
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Culture
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Insights
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Careers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Work
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Culture
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Partners
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Stories
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Careers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Events
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Contact
          </a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <MdClose className="menu-btn" size={40} style={{ color: "white" }} />
        ) : (
          <BsThreeDots
            className="menu-btn"
            size={40}
            style={{ color: "white" }}
          />
        )}
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
