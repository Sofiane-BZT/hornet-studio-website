import "./AccessoriesCard.css";

import React from "react";

const AccessoriesCard = (props) => {
  return (
    // conteneur de la carte accéssoire

    <div className="card-container" key={props.id}>
      <img src={props.imgsrc} alt="accessoire" />

      <div className="product-details">
        <strong> {props.name}</strong>
        <span> {props.price}</span>
      </div>
    </div>
  );
};

export default AccessoriesCard;
