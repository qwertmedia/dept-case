import React from "react";
import "./OverlayMenu.scss";

const OverlayMenu = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1000"
      className="overlay-menu-items"
    >
      <ul className="overlay-list">
        <li>HOME</li>
        <li>WORK</li>
        <li>CULTURE</li>
        <li>SERVICES</li>
        <li>PARTNERS</li>
        <li>STORIES</li>
        <li>CAREERS</li>
        <li>EVENTS</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
};

export default OverlayMenu;
