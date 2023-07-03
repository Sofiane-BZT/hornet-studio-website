// import React, { useState, useEffect } from "react";
// import { useQuery } from "graphql-hooks";
// import AchievementsCard from "../components/AchievementsCard";
// import Heading from "../components/Heading";
// import ContactHeadband from "../components/ContactHeadband";
// import { ACHIEVEMENTS_PAGE_HEADER } from "../data/home_data/HomeHeaderAchievements";
// import { ACHIEVEMENT_PAGE_PICTURES } from "../data/home_data/HomePicturesAchievements";
// import { ACHIEVEMENT_MSG_CONTACT } from "../data/home_data/HomeMsgContact";

// const Achievements = () => {
//   const {
//     loading: homeHeaderAchievementsLoading,
//     error: homeHeaderAchievementsError,
//     data: homeHeaderAchievementsData,
//   } = useQuery(HOME_HEADER_ACHIEVEMENTS);

//   // Requête pour récupérer les données

//   const {
//     loading: achievementsPicturesLoading,
//     error: achievementsPicturesError,
//     data: achievementsPicturesData,
//   } = useQuery(ACHIEVEMENT_PAGE_PICTURES);

//   // Requête pour récupérer les données

//   const {
//     loading: MsgContactLoading,
//     error: MsgContactError,
//     data: MsgContactData,
//   } = useQuery(HOME_MSG_CONTACT);

//   //stockage des données récupérées

//   const [mainHomeHeroData, setMainHomeHeroData] = useState(null);
//   const [homeIntroData, setHomeIntroData] = useState(null);
//   const [headerAchievementsData, setHeaderAchievementsData] = useState(null);

//   // Mise à jour des données du héros

//   useEffect(() => {
//     if (homeHeroData && !mainHomeHeroData) {
//       setMainHomeHeroData(homeHeroData.allImagePrincipalePageAccueils[0]);
//     }
//   }, [homeHeroData, mainHomeHeroData]);

//   // Mise à jour des données de l'introduction

//   useEffect(() => {
//     if (homeIntrocutionData && !homeIntroData) {
//       setHomeIntroData(homeIntrocutionData.allIntroductionHomePages[0]);
//     }
//   }, [homeIntrocutionData, homeIntroData]);

//   // Mise à jour des données du titre d'entête des réalisations

//   useEffect(() => {
//     if (homeHeaderAchievementsData && !headerAchievementsData) {
//       setHeaderAchievementsData(
//         homeHeaderAchievementsData.allHeaderAchievementsHomePages[0]
//       );
//     }
//   }, [homeHeaderAchievementsData, headerAchievementsData]);

//   // gestion des chargement et erreurs des requêtes
//   try {
//     if (
//       homeHeaderAchievementsLoading ||
//       homePicturesAchievementsLoading ||
//       MsgContactLoading
//     )
//       return <p>Loading...</p>;
//     if (
//       homeHeaderAchievementsError ||
//       homePicturesAchievementsError ||
//       MsgContactError
//     )
//       return <p>Error :(</p>;

//     console.log("picturesAchievementsData:", picturesAchievementsData);

//     // rendu du composant principal

//     return (
//       <div>
//         <Heading title={headerAchievementsData.title} />
//         {/* Div qui contient les card de réalisations */}
//         <div className="work-container">
//           {picturesAchievementsData &&
//             picturesAchievementsData[0].map((picture) => {
//               console.log(picture);
//               return (
//                 <AchievementsCard
//                   pictureUrl={picture.url}
//                   pictureAlt={picture.alt}
//                   key={picture.id}
//                 />
//               );
//             })}
//         </div>
//         <ContactHeadband
//           text={homeMsgContactData.message}
//           key={homeMsgContactData.id}
//         />
//       </div>
//     );
//   } catch (error) {
//     return <p>Something Bad Happened {error.message}</p>;
//   }
// };
// export default Achievements;
