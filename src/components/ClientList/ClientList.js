import React from "react";
import "./ClientList.scss";
import logos from "./logos";

const ClientList = () => {
  return (
    <div className="client-container">
      <h1>Clients</h1>
      <p>
        We value a great working relationship with our clients above all else.
        It's why they often come to our parties. It's also why we're able to
        challenge and inspire them to reach for the stars.
      </p>
      <div className="client-logos">
        <div class="columns">
          <div class="column">
            <img src={logos.logo1} alt="" />
            <img src={logos.logo2} alt="" />
            <img src={logos.logo3} alt="" />
          </div>
          <div class="column">
            <img src={logos.logo4} alt="" />
            <img src={logos.logo5} alt="" />
            <img src={logos.logo6} alt="" />
          </div>
          <div class="column">
            <img src={logos.logo7} alt="" />
            <img src={logos.logo8} alt="" />
            <img src={logos.logo9} alt="" />
          </div>
          <div class="column">
            <img src={logos.logo10} alt="" />
            <img src={logos.logo11} alt="" />
            <img src={logos.logo12} alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientList;
