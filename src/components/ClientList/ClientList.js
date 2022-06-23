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
        {logos.map((logo) => {
          return (
            <div className="column">
              <img src={logo} alt="clientimage" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientList;
