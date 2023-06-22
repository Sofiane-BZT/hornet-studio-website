import React, { useState, useEffect } from "react";
import { useQuery } from "graphql-hooks";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import AchievementsCard from "../components/AchievementsCard";
import Heading from "../components/Heading";
import ContactHeadband from "../components/ContactHeadband";
import "../routes/Home.css";
import { HOME_HERO_DATA } from "../data/home_data/HomeHeroData";
import { HOME_INTRODUCTION_DATA } from "../data/home_data/HomeIntroductionData";
import { HOME_HEADER_ACHIEVEMENTS } from "../data/home_data/HomeHeaderAchievements";
import { HOME_PICTURES_ACHIEVEMENTS } from "../data/home_data/HomePicturesAchievements";

const Home = () => {
  // Requête pour récupérer les données du héros

  const {
    loading: homeHeroLoading,
    error: homeHeroError,
    data: homeHeroData,
  } = useQuery(HOME_HERO_DATA);

  // Requête pour récupérer les données de l'introduction
  const {
    loading: homeIntrocutionLoading,
    error: homeIntrocutionError,
    data: homeIntrocutionData,
  } = useQuery(HOME_INTRODUCTION_DATA);

  // Requête pour récupérer les données des réalisations

  const {
    loading: homeHeaderAchievementsLoading,
    error: homeHeaderAchievementsError,
    data: homeHeaderAchievementsData,
  } = useQuery(HOME_HEADER_ACHIEVEMENTS);

  // Requête pour récupérer les données des images des réalisations

  const {
    loading: homePicturesAchievementsLoading,
    error: homePicturesAchievementsError,
    data: homePicturesAchievementsData,
  } = useQuery(HOME_PICTURES_ACHIEVEMENTS);

  //stockage des données récupérées

  const [mainHomeHeroData, setMainHomeHeroData] = useState(null);
  const [homeIntroData, setHomeIntroData] = useState(null);
  const [headerAchievementsData, setHeaderAchievementsData] = useState(null);
  const [picturesAchievementsData, setPicturesAchievementsData] =
    useState(null);

  // Mise à jour des données du héros

  useEffect(() => {
    if (homeHeroData && !mainHomeHeroData) {
      setMainHomeHeroData(homeHeroData.allImagePrincipalePageAccueils[0]);
    }
  }, [homeHeroData, mainHomeHeroData]);

  // Mise à jour des données de l'introduction

  useEffect(() => {
    if (homeIntrocutionData && !homeIntroData) {
      setHomeIntroData(homeIntrocutionData.allIntroductionHomePages[0]);
    }
  }, [homeIntrocutionData, homeIntroData]);

  // Mise à jour des données du titre d'entête des réalisations

  useEffect(() => {
    if (homeHeaderAchievementsData && !headerAchievementsData) {
      setHeaderAchievementsData(
        homeHeaderAchievementsData.allHeaderAchievementsHomePages[0]
      );
    }
  }, [homeHeaderAchievementsData, headerAchievementsData]);

  // Mise à jour des données des Card de réalisation

  useEffect(() => {
    if (homePicturesAchievementsData && !picturesAchievementsData) {
      setPicturesAchievementsData(
        homePicturesAchievementsData.allPicturesAchievementsHomePages.map(
          (item) => item.homePageAchievements
        )
      );
    }
  }, [homePicturesAchievementsData, picturesAchievementsData]);

  // gestion des chargement et erreurs des requêtes
  try {
    if (
      homeHeroLoading ||
      homeIntrocutionLoading ||
      homeHeaderAchievementsLoading ||
      homePicturesAchievementsLoading
    )
      return <p>Loading...</p>;
    if (
      homeHeroError ||
      homeIntrocutionError ||
      homeHeaderAchievementsError ||
      homePicturesAchievementsError
    )
      return <p>Error :(</p>;

    console.log("picturesAchievementsData:", picturesAchievementsData);

    // rendu du composant principal

    return (
      <div>
        <Hero
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
        {/* Div qui contient les card de réalisations */}
        <div className="work-container">
          {picturesAchievementsData &&
            picturesAchievementsData[0].map((picture) => {
              console.log(picture);
              return (
                <AchievementsCard
                  pictureUrl={picture.url}
                  pictureAlt={picture.alt}
                  key={picture.id}
                />
              );
            })}
        </div>
        <ContactHeadband message="Message Contact test mission Rem Maelium id Coriolanus placet num adpetentem Maelium illi Coriolano debeat amici adpetentem Vecellinum contra Vecellinum Coriolano si Coriolanus progredi habuit habuit patriam Vecellinum habuit amicos num cum Numne Coriolanus debeat adpetentem amici amicos si adpetentem num Coriolanus debuerunt id." />
      </div>
    );
  } catch (error) {
    return <p>Something Bad Happened {error.message}</p>;
  }
};

export default Home;
