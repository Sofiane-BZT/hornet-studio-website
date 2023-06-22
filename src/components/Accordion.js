import "./Accordion.css";
import React, { useState } from "react";

const Accordion = (props) => {
  // État pour gérer l'ouverture et la fermeture
  const [isOpen, setIsOpen] = useState(false);
  // changer l'état de l'accordéon
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion">
      <div className="accordion-title" onClick={toggleAccordion}>
        <h3>{props.question}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {/* ici j'affiche le contenu de la réponse si l'accordéon est ouvert */}
      {isOpen && <div className="accordion-content">{props.answer}</div>}
    </div>
  );
};

export default Accordion;
