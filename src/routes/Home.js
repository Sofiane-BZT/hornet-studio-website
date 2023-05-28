import React, { useState, useEffect } from "react";
import { useQuery } from "graphql-hooks";
import HomeHero from "../components/HomeHero";
import Introduction from "../components/Introduction";
import Achievements from "../components/Achievements";
import Heading from "../components/Heading";
import ContactHeadband from "../components/ContactHeadband";
import { HOME_HERO_DATA } from "../data/home_data/HomeHeroData";
import { HOME_INTRODUCTION_DATA } from "../data/home_data/HomeIntroductionData";
import { HOME_HEADER_ACHIEVEMENTS } from "../data/home_data/HomeHeaderAchievements";

const Home = () => {
  const {
    loading: homeHeroLoading,
    error: homeHeroError,
    data: homeHeroData,
  } = useQuery(HOME_HERO_DATA);

  const {
    loading: homeIntrocutionLoading,
    error: homeIntrocutionError,
    data: homeIntrocutionData,
  } = useQuery(HOME_INTRODUCTION_DATA);

  const {
    loading: homeHeaderAchievementsLoading,
    error: homeHeaderAchievementsError,
    data: homeHeaderAchievementsData,
  } = useQuery(HOME_HEADER_ACHIEVEMENTS);

  const [mainHomeHeroData, setMainHomeHeroData] = useState(null);
  const [homeIntroData, setHomeIntroData] = useState(null);
  const [headerAchievementsData, setHeaderAchievementsData] = useState(null);

  // --------------------------------------------------------------------------

  useEffect(() => {
    if (homeHeroData && !mainHomeHeroData) {
      setMainHomeHeroData(homeHeroData.allImagePrincipalePageAccueils[0]);
    }
  }, [homeHeroData, mainHomeHeroData]);

  // -------------------------------------------------------------------------

  useEffect(() => {
    if (homeIntrocutionData && !homeIntroData) {
      setHomeIntroData(homeIntrocutionData.allIntroductionHomePages[0]);
    }
  }, [homeIntrocutionData, homeIntroData]);

  // -------------------------------------------------------------------------

  useEffect(() => {
    if (homeHeaderAchievementsData && !headerAchievementsData) {
      setHeaderAchievementsData(
        homeHeaderAchievementsData.allHeaderAchievementsHomePages[0]
      );
    }
  }, [homeHeaderAchievementsData, headerAchievementsData]);

  try {
    if (
      homeHeroLoading ||
      homeIntrocutionLoading ||
      homeHeaderAchievementsLoading
    )
      return <p>Loading...</p>;
    if (homeHeroError || homeIntrocutionError || homeHeaderAchievementsError)
      return <p>Error :(</p>;

    return (
      <div>
        <HomeHero
          mainHeroImg={mainHomeHeroData.mainImgHomeHero.url}
          mainHeroImgAlt={mainHomeHeroData.mainImgHomeHero.alt}
          key={mainHomeHeroData.mainImgHomeHero.id}
        />
        <Introduction
          title={homeIntroData.title}
          text={homeIntroData.text}
          key={homeIntroData.id}
        />

        <Heading title={headerAchievementsData.title} />
        <Achievements />
        <ContactHeadband message="Message Contact test mission Rem Maelium id Coriolanus placet num adpetentem Maelium illi Coriolano debeat amici adpetentem Vecellinum contra Vecellinum Coriolano si Coriolanus progredi habuit habuit patriam Vecellinum habuit amicos num cum Numne Coriolanus debeat adpetentem amici amicos si adpetentem num Coriolanus debuerunt id." />
      </div>
    );
  } catch (error) {
    return <p>Something Bad Happened {error.message}</p>;
  }
};

export default Home;
