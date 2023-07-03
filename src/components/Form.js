import "./Form.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Nom</label>
        <input type="text" required pattern="[a-zA-Zà-ÿÀ-Ÿ -]+"></input>
        <label>Prénom</label>
        <input type="text" required pattern="[a-zA-Zà-ÿÀ-Ÿ -]+"></input>
        <label>Adresse e-mail</label>
        <input type="email" required></input>
        <label>Téléphone</label>
        <input type="tel" required></input>
        <label>Message</label>
        <textarea
          name="contact-message"
          rows="10"
          placeholder="Merci de saisir votre message ici..."
          required
          minLength={20}
        />
        <button className="btn">ENVOYER</button>
      </form>
    </div>
  );
};

export default Form;
