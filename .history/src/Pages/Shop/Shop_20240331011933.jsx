import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Collapse from "../../Components/Collapse/Collapse";
import Slideshow from "../../Components/SlideShow/SlideShow";
import propertiesData from "../../../logements.json";
import "../../Pages/Shop/Shop.scss";
import bannerImage from "../../assets/images/banniere.jpeg";
import fullStar from "../../assets/images/starFull.png"; // Assurez-vous que le chemin vers ces images est correct
import emptyStar from "../../assets/images/starEmpty.png";

const Shop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [propertyDetails, setPropertyDetails] = useState(null);

  useEffect(() => {
    // Trouver la propriété par ID
    const property = propertiesData.find((p) => p.id.toString() === id);

    if (!property) {
      navigate("/error"); // Rediriger vers la page d'erreur si la propriété n'est pas trouvée
    } else {
      setPropertyDetails(property);
    }
  }, [id, navigate]);

  if (!propertyDetails) {
    return <div>Loading...</div>; // Ou tout autre indicateur de chargement
  }

  // Génération des étoiles
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < parseInt(propertyDetails.rating) ? fullStar : emptyStar
  );

  return (
    <div className="shop-page">
      {propertyDetails.pictures && (
        <Slideshow images={propertyDetails.pictures} showArrows={true} />
      )}
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
              alt={`Rating star ${index + 1}`}
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
      </div>
    </div>
  );
};

export default Shop;
