// Données provenants de DatoCMS pour afficher l'image principale de la page piercing

export const PIERCING_HERO_DATA = `
query {
    allMainImagePiercingPages {
      mainImagePiercingHero {
        id
        url
        alt
      }
    }
  }`;
