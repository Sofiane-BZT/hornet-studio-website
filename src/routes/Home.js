import React from "react";
import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Introduction from "../components/Introduction";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <Introduction
        title="Notre mission"
        text="About mission Rem Maelium id Coriolanus placet num adpetentem Maelium illi Coriolano debeat amici adpetentem Vecellinum contra Vecellinum Coriolano si Coriolanus progredi habuit habuit patriam Vecellinum habuit amicos num cum Numne Coriolanus debeat adpetentem amici amicos si adpetentem num Coriolanus debuerunt id."
      />
    </div>
  );
};

export default Home;
