import "./Footer.css";
import React, { useState, useEffect } from "react";
import { useQuery } from "graphql-hooks";
import { FOOTER_DATA } from "../data/FooterData";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { loading, error, data } = useQuery(FOOTER_DATA);
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    if (data && data.allPiedDePages) {
      setFooterData(data.allPiedDePages[0]);
    }
  }, [data]);

  try {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something Bad Happened {error.message}</p>;

    if (!footerData) return null;

    return (
      <div className="footer" key={footerData.id}>
        <div className="footer-container">
          <div className="informations-container">
            <div className="location list-center">
              <p>Adresse</p>
              <ul>
                <li> {footerData.adress} </li>
                <li> {footerData.city} </li>
              </ul>
            </div>
            <div className="contact-details list-center">
              <p>Coordonées</p>
              <ul>
                <li> {footerData.phoneNumber} </li>
                <li> {footerData.email} </li>
              </ul>
            </div>
            <div className="schedule list-center">
              <p>Horraires</p>
              <ul>
                <li> {footerData.oppeningDays} </li>
                <li> {footerData.oppeningHours} </li>
              </ul>
            </div>
          </div>
          <div className="Social-networks">
            <NavLink
              to="https://www.facebook.com/HornetStudio/"
              target="_blank"
            >
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
  } catch (error) {
    console.log(error);
    console.log(footerData.id);
    return <p>Something Bad Happened {error.message}</p>;
  }
};

export default Footer;
