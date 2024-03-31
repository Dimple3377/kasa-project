import { useParams } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Collapse from "../../Components/Collapse/Collapse";
import "../../Pages/Shop/Shop.scss"; // Assurez-vous que le chemin est correct
import bannerImage from "../../assets/images/banniere.jpeg";
import fullStar from "../../assets/images/starRed.png";
import emptyStar from "../../assets/images/star.png";

const Shop = () => {
  // Exemple de données
  const propertyDetails = {
    title: "Cozy loft on the Canal Saint-Martin",
    location: "Paris, Île-de-France",
    rating: 3, // Exemple de note
    tags: ["Cozy", "Canal", "Paris 10"], // Exemple de tags
  };

  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(i < propertyDetails.rating ? fullStar : emptyStar);
  }
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
        {/* Insérez ici le reste de votre contenu pour les détails du logement */}
      </div>
    </div>
  );
};

export default Shop;
