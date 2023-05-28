// Données provenants de DatoCMS pour remplir le message qui sera affiché
// dans le bandeau de contact de la page FAQ

export const FAQ_CONTACT_HEADBAND_DATA = `
    query {
    allBandeauContactFaqs {
      id
      text
    }
  }`;
