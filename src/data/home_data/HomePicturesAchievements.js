// Données provenants de DatoCMS pour afficher photos des dernières réalisations dans la page d'accueil

export const HOME_PICTURES_ACHIEVEMENTS = `
query {
  allPicturesAchievementsHomePages {
    homePageAchievements {
      id
      url
      alt
    }
    }
  }`;
