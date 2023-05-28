import React, { useState, useEffect } from "react";
import "./Faq.css";
import Accordion from "../components/Accordion";
import ContactHeadband from "../components/ContactHeadband";
import Heading from "../components/Heading";
import { useQuery } from "graphql-hooks";
import { FAQ_HEADING_DATA } from "../data/faq_data/FaqHeadingData";
import { FAQ_ACCORDION_DATA } from "../data/faq_data/FaqAccordionData";
import { FAQ_CONTACT_HEADBAND_DATA } from "../data/faq_data/FaqContactHeadband";

const Faq = () => {
  const {
    loading: headingLoading,
    error: headingError,
    data: headingData,
  } = useQuery(FAQ_HEADING_DATA);
  const {
    loading: accordionLoading,
    error: accordionError,
    data: accordionData,
  } = useQuery(FAQ_ACCORDION_DATA);

  const {
    loading: contactHeadbandLoading,
    error: contactHeadbandError,
    data: contactHeadbandData,
  } = useQuery(FAQ_CONTACT_HEADBAND_DATA);

  const [faqHeadingData, setFaqHeadingData] = useState(null);
  const [faqAccordionData, setfaqAccordionData] = useState(null);
  const [faqContactHeadbandData, setfaqContactHeadbandData] = useState(null);

  useEffect(() => {
    if (headingData && !faqHeadingData) {
      setFaqHeadingData(headingData.allFaqPageHeaders[0]);
    }
  }, [headingData, faqHeadingData]);

  useEffect(() => {
    if (accordionData && !faqAccordionData) {
      setfaqAccordionData(accordionData.allFaqs);
    }
  }, [accordionData, faqAccordionData]);

  useEffect(() => {
    if (contactHeadbandData && !faqContactHeadbandData) {
      setfaqContactHeadbandData(contactHeadbandData.allBandeauContactFaqs[0]);
    }
  }, [contactHeadbandData, faqContactHeadbandData]);

  try {
    if (headingLoading || accordionLoading || contactHeadbandLoading)
      return <p>Loading...</p>;
    if (headingError || accordionError || contactHeadbandError)
      return <p>Error :(</p>;

    return (
      <div>
        {faqHeadingData && (
          <Heading key={faqHeadingData.id} title={faqHeadingData.title} />
        )}

        <div className="accordion-container">
          {faqAccordionData &&
            faqAccordionData.map((accData) => (
              <Accordion
                key={accData.id}
                question={accData.question}
                answer={accData.answer}
              />
            ))}
        </div>
        <ContactHeadband
          key={faqContactHeadbandData.id}
          text={faqContactHeadbandData.text}
        />
      </div>
    );
  } catch (error) {
    return <p>Something Bad Happened {error.message}</p>;
  }
};

export default Faq;
