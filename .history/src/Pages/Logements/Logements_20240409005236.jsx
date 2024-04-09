import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Collapse from "../../Components/Collapse/Collapse";
import Slideshow from "../../Components/SlideShow/SlideShow";
import propertiesData from "../../../logements.json";
import "../../Pages/Logements/Logements.scss";

import fullStar from "../../assets/images/starRed.png";
import emptyStar from "../../assets/images/star.png";

const Logements = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [propertyDetails, setPropertyDetails] = useState(null);

  useEffect(() => {
    const property = propertiesData.find((p) => p.id === id);
    if (!property) {
      navigate("/error");
    } else {
      setPropertyDetails(property);
    }
  }, [id, navigate]);

  if (!propertyDetails) {
    return <div>Loading...</div>;
  }

  // Générer les étoiles de rating
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < parseInt(propertyDetails.rating) ? fullStar : emptyStar
  );

  return (
    <div className="logements-page">
      <Slideshow images={propertyDetails.pictures} showArrows={true} />
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
        <div className="property-host">
          <img
            src={propertyDetails.host.picture}
            alt={propertyDetails.host.name}
            className="host-image"
          />
          <p className="host-name">{propertyDetails.host.name}</p>
        </div>
        <div className="collapses-container">
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
    </div>
  );
};

export default Logements;
