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
    rating: 3, // Par exemple
    // ...
  };

  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(i < propertyDetails.rating ? fullStar : emptyStar);
  }

  return (
    <div className="shop-page">
      <Banner title={propertyDetails.title} backgroundUrl={bannerImage} />
      {/* Autres sections de la page */}
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
        <div className="property-rating">{ratingStars}</div>
        {/* Reste du contenu */}
      </div>
    </div>
  );
};
