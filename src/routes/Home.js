import React from "react";
import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Introduction from "../components/Introduction";
import Achievements from "../components/Achievements";
import Heading from "../components/Heading";
import ContactHeadband from "../components/ContactHeadband";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <Introduction
        title="Notre mission"
        text="About mission Rem Maelium id Coriolanus placet num adpetentem Maelium illi Coriolano debeat amici adpetentem Vecellinum contra Vecellinum Coriolano si Coriolanus progredi habuit habuit patriam Vecellinum habuit amicos num cum Numne Coriolanus debeat adpetentem amici amicos si adpetentem num Coriolanus debuerunt id."
      />
      <Heading title="Titre de test" />
      <Achievements />
      <ContactHeadband message="Message Contact test mission Rem Maelium id Coriolanus placet num adpetentem Maelium illi Coriolano debeat amici adpetentem Vecellinum contra Vecellinum Coriolano si Coriolanus progredi habuit habuit patriam Vecellinum habuit amicos num cum Numne Coriolanus debeat adpetentem amici amicos si adpetentem num Coriolanus debuerunt id." />
    </div>
  );
};

export default Home;
