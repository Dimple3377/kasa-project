// src/components/Home.jsx

import Card from "../Components/Card";
import logements from "../data/logements"; // Ajustez le chemin d'importation en fonction de l'emplacement de votre fichier

function Home() {
  return (
    <div>
      {logements.map((logement) => (
        <Card key={logement.id} {...logement} />
      ))}
    </div>
  );
}

export default Home;
