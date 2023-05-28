// Données provenants de DatoCMS pour remplir le l'entête qui sera affiché
// dans le composant Heading de la page FAQ

export const FAQ_HEADING_DATA = `
query {
allFaqPageHeaders {
    id
    title
  }
}`;
