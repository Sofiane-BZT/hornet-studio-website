import "./Accessories.css";
import ShopData from "../data/ShopData";
import React from "react";
import AccessoriesCard from "./AccessoriesCard";

const categories = ["decoration", "ring", "earings", "bangles"];

// création d'un objet pour associer les cathégorie à un nom
const categoriesNames = {
  decoration: "Décoration",
  ring: "bagues",
  earings: "Boucle d'oreilles",
  bangles: "Bracelets",
};

const Accessories = () => {
  return (
    <div className="shop-category-container">
      {/* mapping sur toute les cath */}
      {categories.map((categorie) => {
        return (
          <div key={categorie}>
            {/* ici j'affiche le nom de la cathégorie graçe à categoriesNames */}
            <h2>{categoriesNames[categorie]}</h2>
            <div className="cards-container">
              {/* fitre des données provenant de shopData en fonction de la cathégorie actuelle */}
              {ShopData.filter((value) => categorie == value.category).map(
                (value) => {
                  return (
                    <AccessoriesCard
                      key={value.id}
                      imgsrc={value.imgsrc}
                      name={value.name}
                      price={value.price}
                    />
                  );
                }
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accessories;
