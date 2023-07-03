// Importation des bibliothèques
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import { BrowserRouter } from "react-router-dom";

// Config du client GraphQL
const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    Authorization: "acd0a45a0eb0eb7191b6691891c655",
  },
});

// Création du point de rendu dans l'élément avec l'id "root"
const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendu du site
root.render(
  // Utilisation du strict mode  pour gérer des avertissements
  <React.StrictMode>
    {/* Utilisation du BrowserRouter pour la gestion des routes */}
    <BrowserRouter>
      {/* Fourniture du client GraphQL à toute l'application graçe au contexte */}
      <ClientContext.Provider value={client}>
        {/* rendu du composant principal */}
        <App />
      </ClientContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
