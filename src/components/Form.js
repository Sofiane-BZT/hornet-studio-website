import "./Form.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Nom</label>
        <input type="text" required></input>
        <label>Prénom</label>
        <input type="text" required></input>
        <label>Adresse e-mail</label>
        <input type="email" required></input>
        <label>Téléphone</label>
        <input type="number" required></input>
        <label>Message</label>
        <textarea
          name="contact-message"
          rows="10"
          placeholder="Merci de saisir votre message ici..."
          required
        />
        <button className="btn">ENVOYER</button>
      </form>
    </div>
  );
};

export default Form;
