import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <header>
      <Link to="/">
        <h1>HORNET STUDIO</h1>
      </Link>
      <ul className={click ? "navigation apparition" : " navigation"}>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/piercing">Piercing</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/réalisation">Réalisations</Link>
        </li>
        <li>
          <Link to="/faq">Faq</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes className="fa-times" />
        ) : (
          <FaBars className="fa-bars" />
        )}
      </div>
    </header>
  );
};

export default Navbar;
