import { useParams } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Collapse from "../../Components/Collapse/Collapse";
import "../../Pages/Shop/Shop.scss";
import bannerImage from "../../assets/images/banniere.jpeg";
import fullStar from "../../assets/images/starRed.png";
import emptyStar from "../../assets/images/star.png";

const Shop = () => {
  const { id } = useParams();
  // Exemple de données, potentiellement récupérées via un appel API
  const propertyDetails = {
    title: "Cozy loft on the Canal Saint-Martin",
    location: "Paris, Île-de-France",
    rating: 3,
    tags: ["Cozy", "Canal", "Paris 10"],
    description: "Full description of the property...",
    equipments: ["WiFi", "Kitchen", "Iron", "Hair dryer"],
  };

  // Génération des étoiles
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < propertyDetails.rating ? fullStar : emptyStar);
  }

  // Ajout des Collapses pour la description et les équipements
  return (
    <div className="shop-page">
      <Banner title={propertyDetails.title} backgroundUrl={bannerImage} />
      <div className="property-details">
        <h2>{propertyDetails.title}</h2>
        <p>{propertyDetails.location}</p>
        <div className="property-tags">
          {propertyDetails.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="property-rating">
          {stars.map((star, index) => (
            <img
              key={index}
              src={star}
              alt="Rating star"
              className="rating-star"
            />
          ))}
        </div>
        <Collapse title="Description">
          <p>{propertyDetails.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {propertyDetails.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
        {/* Vous pouvez ajouter plus de contenu ou de composants ici si nécessaire */}
      </div>
    </div>
  );
};

export default Shop;
