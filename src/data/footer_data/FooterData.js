// Données provenants de DatoCMS pour remplir les éléments du Composant Footer

export const FOOTER_DATA = `
    query {
      allPiedDePages {
        id
        adress
        city
        phoneNumber
        email
        oppeningDays
        oppeningHours
      }
  
}`;
