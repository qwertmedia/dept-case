import React from "react";
import "./ClientNote.scss";

const ClientNote = (props) => {
  return (
    <div>
      <div className="clientnote-item">
        <div className="project">
          <h1>{props.client1}</h1>
          <p>{props.info1}</p>
          <h4>&#x2609; Read more</h4>
        </div>
        <div className="project" id="center-project">
          <h1>{props.client2}</h1>
          <p>{props.info2}</p>
          <h4>&#x2609; Read more</h4>
        </div>
        <div className="project" id="last-project">
          <h1>{props.client1}</h1>
          <p>{props.info1}</p>
          <h4>&#x2609; Read more</h4>
        </div>
      </div>
    </div>
  );
};

export default ClientNote;
