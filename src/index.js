import React from "react";
import ReactDOM from "react-dom/client";
//
// import "./App.css"; ::// Importez un fichier CSS depuis le même répertoire
import reportWebVitals from "./reportWebVitals";
import App from "./App"; // Importez le composant App

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si vous souhaitez commencer à mesurer les performances de votre application, passez une fonction
// pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou envoyez-les à un point de terminaison d'analyse. En savoir plus : https://bit.ly/CRA-vitals
reportWebVitals();
