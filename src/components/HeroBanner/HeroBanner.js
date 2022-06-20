import React from "react";
import "./HeroBanner.scss";
import Banner from "./assets/herobanner.jpg";

const HeroBanner = () => {
  return (
    <div className="banner">
      <img className="banner-img" src={Banner} alt="" />
      <div className="info">
        <h1>WORK</h1>
        <h2>
          A selection of projects that <b>pioneer</b> <b>tech</b> and{" "}
          <b>marketing</b> to help brands stay ahead.
        </h2>
      </div>
    </div>
  );
};

export default HeroBanner;
