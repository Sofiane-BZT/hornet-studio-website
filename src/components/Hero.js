import "./Hero.css";
import React from "react";

const Hero = (props) => {
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

export default Hero;
