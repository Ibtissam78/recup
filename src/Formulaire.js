import React, { useState } from "react";
// import "./index.css";
function Formulaire() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nom: ${nom}\nE-mail: ${email}`);
    // Vous pouvez également envoyer les données vers un serveur ici
  };

  return (
    <div>
      <h2>Formulaire</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={handleNomChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <button type="submit">Soumettre</button>
        </div>
      </form>
    </div>
  );
}

export default Formulaire;
