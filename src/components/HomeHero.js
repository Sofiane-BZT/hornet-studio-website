import "./HomeHero.css";
import React from "react";
import HeroImg from "../assets/hero.jpg";

const HomeHero = () => {
  return (
    <div className="hero-container">
      <img
        src={HeroImg}
        alt="client entrain de se faire tattouer"
        className="contained-picture"
      />
    </div>
  );
};

export default HomeHero;
