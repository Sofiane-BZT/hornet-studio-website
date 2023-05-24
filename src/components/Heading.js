import "./Heading.css";

import React from "react";

const Heading = (props) => {
  return <h1 className="heading">{props.title}</h1>;
};

export default Heading;
