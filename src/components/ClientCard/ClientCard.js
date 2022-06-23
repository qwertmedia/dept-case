import React, { useEffect } from "react";
import AOS from "aos";
import clients from "./ClientData"
import "aos/dist/aos.css";
import "./ClientCard.scss";



const ClientCard = () => {

const clientFirst = clients.slice(0,4)

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
      {clientFirst.map(client =>{
        return(
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
        )
      })}
        
        
    
      </div>
      </div>
  );
};

export default ClientCard;
