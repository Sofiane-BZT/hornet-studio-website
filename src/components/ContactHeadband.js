import "./ContactHeadband.css";
import { Link } from "react-router-dom";
import React from "react";

const ContactHeadband = (props) => {
  return (
    <div className="contact-headband-container">
      <p className="contact-headband-message">{props.message}</p>
      <Link to="/contact" className="btn">
        Contactez-nous
      </Link>
    </div>
  );
};

export default ContactHeadband;
