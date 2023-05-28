import "./HomeHero.css";
import React from "react";

const HomeHero = (props) => {
  return (
    <div className="hero-container">
      <img
        src={props.mainHeroImg}
        alt={props.mainHeroImgAlt}
        key={props.id}
        className="contained-picture"
      />
    </div>
  );
};

export default HomeHero;
