import React, { useState } from "react";

// import "./index.css";
function FormulairSignalement() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nom: ${nom}\nE-mail: ${email} Description: ${description}`);
    // Vous pouvez également envoyer les données vers un serveur ici
  };

  return (
    <div>
      <h2>Formulaire Signalement</h2>
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
          <label htmlFor="description">Description :</label>
          <input
            type="description"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
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

export default FormulairSignalement;
