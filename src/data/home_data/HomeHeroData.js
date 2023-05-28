// Données provenants de DatoCMS pour afficher l'image principale de la page d'accueil

export const HOME_HERO_DATA = `
query{
    allImagePrincipalePageAccueils {
      mainImgHomeHero {
        id
        url
        alt
      }
    }
  }`;
