// Données provenants de DatoCMS pour remplir les questions et réponses qui seront affichés
// dans les composants accordéons de la page FAQ

export const FAQ_ACCORDION_DATA = `

query {
    allFaqs {
      id
      question
      answer
    }
  } `;
