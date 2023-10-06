import React from "react";
import Formulaire from "./Formulaire";
import FormulairSignalement from "./formulairSignalement";

function App() {
  return (
    <div className="App">
      <h1>Ma Application React</h1>
      <Formulaire />
      <FormulairSignalement/>
      
    </div>
  );
}

//   function Formulaire() {
//     <Formulaire>
//       <div>
//         <input type="Name" />
//       </div>
//     </Formulaire>;
//   }
// }

export default App;

// Si Formulaire.js et ButtonValider.js sont dans un répertoire parent, utilisez ".." pour remonter d'un niveau
