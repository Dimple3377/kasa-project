import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Collapse from "../../Components/Collapse/Collapse";
import Slideshow from "../../Components/SlideShow/SlideShow";
import propertiesData from "../../../logements.json";
import "../../Pages/Shop/Shop.scss";
import bannerImage from "../../assets/images/banniere.jpeg";
import fullStar from "../../assets/images/starRed.png";
import emptyStar from "../../assets/images/star.png";

const Shop = () => {
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

  const stars = propertyDetails.rating
    ? Array.from({ length: 5 }, (_, index) =>
        index < propertyDetails.rating ? fullStar : emptyStar
      )
    : [];

  return (
    <div className="shop-page">
      <Slideshow images={propertyDetails.pictures} showArrows={true} />
    </div>
  );
};

export default Shop;
