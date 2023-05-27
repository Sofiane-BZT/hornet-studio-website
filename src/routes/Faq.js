import React from "react";
import "./Faq.css";
import Accordion from "../components/Accordion";
import FaqData from "../data/FaqData";
import ContactHeadband from "../components/ContactHeadband";
import Heading from "../components/Heading";
import HeadingData from "../data/HeadingData";

const Faq = () => {
  return (
    <div>
      <Heading title={HeadingData.headingTitle} />
      <div className="accordion-container">
        {FaqData.map((faqvalue) => (
          <Accordion
            key={faqvalue.id}
            question={faqvalue.question}
            answer={faqvalue.answer}
          />
        ))}
      </div>
      <ContactHeadband />
    </div>
  );
};

export default Faq;
