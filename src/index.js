import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import { BrowserRouter } from "react-router-dom";

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    Authorization: "acd0a45a0eb0eb7191b6691891c655",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ClientContext.Provider value={client}>
        <App />
      </ClientContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
