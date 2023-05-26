import "./AccessoriesCard.css";

import React from "react";

const AccessoriesCard = (props) => {
  return (
    <div className="card-container" key={props.id}>
      <img src={props.imgsrc} alt="accessire" />
      <div className="product-details border-r">
        <strong> {props.name}</strong>
        <span> {props.price}</span>
      </div>
    </div>
  );
};

export default AccessoriesCard;
