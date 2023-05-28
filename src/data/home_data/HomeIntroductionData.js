// Données provenants de DatoCMS pour afficher le titre et message d'introduction pour une brève présentation

export const HOME_INTRODUCTION_DATA = `
query {
    allIntroductionHomePages {
      id
      title
      text
    }
  }`;
