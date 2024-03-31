import { useParams } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Collapse from "../../Components/Collapse/Collapse";
import "../../Pages/Shop/Shop.scss"; // Assurez-vous que le chemin est correct
import bannerImage from "../../assets/images/banniere.jpeg";

import { FaStar, FaRegStar } from "react-icons/fa";

const Shop = () => {
  const { id } = useParams(); // Cela récupère l'ID à partir de l'URL

  // Logique pour charger les données de propriété basée sur l'ID, possiblement avec useEffect

  // Création des étoiles pour le classement
  const ratingStars = Array.from({ length: 5 }, (_, index) => {
    return index < propertyDetails.rating ? (
      <FaStar key={index} className="star" />
    ) : (
      <FaRegStar key={index} className="star" />
    );
  });

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
