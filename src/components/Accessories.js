import "./Accessories.css";
import ShopData from "../data/ShopData";
import React from "react";
import AccessoriesCard from "./AccessoriesCard";

const categories = ["decoration", "ring", "earings", "bangles"];

const categoriesNames = {
  decoration: "Décoration",
  ring: "bagues",
  earings: "Boucle d'oreilles",
  bangles: "Bracelts",
};

const Accessories = () => {
  return (
    <div className="shop-category-container">
      {categories.map((categorie) => {
        return (
          <div key={categorie}>
            <h2>{categoriesNames[categorie]}</h2>
            <div className="cards-container">
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
