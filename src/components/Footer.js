import "./Footer.css";
import React from "react";
import FooterData from "../data/FooterData";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="informations-container">
          <div className="location list-center">
            <p>Adresse</p>
            <ul>
              <li> {FooterData.adress} </li>
              <li> {FooterData.city} </li>
            </ul>
          </div>
          <div className="contact-details list-center">
            <p>Coordonées</p>
            <ul>
              <li> {FooterData.phoneNumber} </li>
              <li> {FooterData.email} </li>
            </ul>
          </div>
          <div className="schedule list-center">
            <p>Horraires</p>
            <ul>
              <li> {FooterData.oppeningDays} </li>
              <li> {FooterData.oppeningHours} </li>
            </ul>
          </div>
        </div>
        <div className="Social-networks">
          <NavLink to="https://www.facebook.com/HornetStudio/" target="_blank">
            <FaFacebook className="social-network-logo" />
          </NavLink>
          <NavLink
            to="https://www.instagram.com/hornetstudio/?hl=fr"
            target="_blank"
          >
            <FaInstagram className="social-network-logo" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
