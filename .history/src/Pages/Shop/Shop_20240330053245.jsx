import React from "react";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card"; // Supposons que vous avez un composant Card pour les caractéristiques
import "../../Pages/Shop/"; // Assurez-vous que le chemin est correct

const Shop = ({ match }) => {
  // Exemple de données, vous allez probablement récupérer ceci à partir de votre state ou props
  const propertyDetails = {
    title: "Cozy loft on the Canal Saint-Martin",
    location: "Paris, Île-de-France",
    rating: 3, // Exemple, où 5 est le meilleur score
    tags: ["Cozy", "Canal", "Paris 10"],
    description: "Full description of the property...",
    equipments: ["WiFi", "Kitchen", "Iron", "Hair dryer"],
    // Autres détails...
  };

  return (
    <div className="shop-page">
      <Banner title={propertyDetails.title} backgroundUrl="" />
      {/* Autres sections de la page */}
      <div className="property-details">
        <h2>{propertyDetails.title}</h2>
        <p>{propertyDetails.location}</p>
        {/* Tags, Équipements, et Description */}
        <div className="property-tags">
          {propertyDetails.tags.map((tag) => (
            <span className="tag">{tag}</span>
          ))}
        </div>
        <div className="property-rating">
          {/* Générez les étoiles en fonction de propertyDetails.rating */}
        </div>
        <div className="property-description">
          <h3>Description</h3>
          <p>{propertyDetails.description}</p>
        </div>
        <div className="property-equipments">
          <h3>Équipements</h3>
          <ul>
            {propertyDetails.equipments.map((equipment) => (
              <li>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Autres composants ou contenus */}
    </div>
  );
};

export default Shop;
