import "./Accordion.css";
import React, { useState } from "react";

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion">
      <div className="accordion-title" onClick={toggleAccordion}>
        <h3>{props.question}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{props.answer}</div>}
    </div>
  );
};

export default Accordion;
