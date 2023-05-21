import "./Introduction.css";

import React from "react";

const Introduction = (props) => {
  return (
    <div className="intro-container">
      <h1> {props.title} </h1>
      <p> {props.text} </p>
    </div>
  );
};

export default Introduction;
