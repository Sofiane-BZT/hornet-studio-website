import React, { useState, useEffect } from "react";
import { useQuery } from "graphql-hooks";
import Hero from "../components/Hero";
import { PIERCING_HERO_DATA } from "../data/piercing_data/PiercingHeroData";

const Piercing = () => {
  const {
    loading: piercingHeroLoading,
    error: piercingHeroError,
    data: piercingHeroData,
  } = useQuery(PIERCING_HERO_DATA);

  const [mainPiercingHeroData, setMainPiercingHeroData] = useState(null);

  useEffect(() => {
    if (piercingHeroData && !mainPiercingHeroData) {
      setMainPiercingHeroData(piercingHeroData.allMainImagePiercingPages[0]);
    }
  }, [piercingHeroData, mainPiercingHeroData]);

  try {
    if (piercingHeroLoading) return <p>Loading...</p>;
    if (piercingHeroError) return <p>Error :(</p>;

    return (
      <div>
        <Hero
          mainHeroImg={mainPiercingHeroData.mainImagePiercingHero.url}
          mainHeroImgAlt={mainPiercingHeroData.mainImagePiercingHero.alt}
          key={mainPiercingHeroData.mainImagePiercingHero.id}
        />
      </div>
    );
  } catch (error) {
    return <p>Something Bad Happened {error.message}</p>;
  }
};

export default Piercing;
