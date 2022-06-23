import React, { useEffect } from "react";

import clients from "./ClientData";
import "aos/dist/aos.css";
import "./ClientCard.scss";
import ClientNote from "../ClientNote/ClientNote";
import ClientRate from "../ClientRate/ClientRate";

const ClientCard = () => {
  const clientFirst = clients.slice(0, 5);
  const clientMid = clients.slice(5, 7);
  const clientSecond = clients.slice(7, 12);
  const clientLast = clients.slice(12);

  return (
    <div className="client-section">
      <div className="categorie-filter">
        <h3>
          Show me <b>all work</b>
        </h3>
        <h3>
          in <b>all industries</b>
        </h3>
      </div>
      <div className="client-cards">
        {clientFirst.map((client) => {
          return (
            <div className="client-item">
              <div className="img-overlay">
                <img src={client.image} alt="clientimage" />
              </div>
              <div className="client-info">
                <h1>{client.client}</h1>
                <h2>{client.info}</h2>
                <h4>&#x2609; Read more</h4>
              </div>
            </div>
          );
        })}
        <ClientNote
          client1="Microsoft"
          info1="Tapping into Ireland's unique gaming culture and brining a fresh flavour to their Xbox social media channels"
          client2="O'Neill"
          info2="Integrating existing content into O'Neills's new e-commerce platform"
        />
      </div>
      <div className="client-cards">
        {clientMid.map((client) => {
          return (
            <div className="client-item">
              <div className="img-overlay">
                <img src={client.image} alt="clientimage" />
              </div>
              <div className="client-info">
                <h1>{client.client}</h1>
                <h2>{client.info}</h2>
                <h4>&#x2609; Read more</h4>
              </div>
            </div>
          );
        })}

        <div className="client-cards">
          <ClientNote
            client1="Microsoft"
            info1="Tapping into Ireland's unique gaming culture and brining a fresh flavour to their Xbox social media channels"
            client2="O'Neill"
            info2="Integrating existing content into O'Neills's new e-commerce platform"
          />
        </div>
        {clientSecond.map((client) => {
          return (
            <div className="client-item">
              <div className="img-overlay">
                <img src={client.image} alt="clientimage" />
              </div>
              <div className="client-info">
                <h1>{client.client}</h1>
                <h2>{client.info}</h2>
                <h4>&#x2609; Read more</h4>
              </div>
            </div>
          );
        })}
      </div>
      <ClientRate />
      <div className="client-cards">
        {clientLast.map((client) => {
          return (
            <div className="client-item">
              <div className="img-overlay">
                <img src={client.image} alt="clientimage" />
              </div>
              <div className="client-info">
                <h1>{client.client}</h1>
                <h2>{client.info}</h2>
                <h4>&#x2609; Read more</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientCard;
