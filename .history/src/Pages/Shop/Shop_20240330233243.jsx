import { useParams, useNavigate } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Collapse from "../../Components/Collapse/Collapse";
import "../../Pages/Shop/Shop.scss";
import bannerImage from "../../assets/images/banniere.jpeg";
import fullStar from "../../assets/images/starRed.png";
import emptyStar from "../../assets/images/star.png";
import Slideshow from "../../Components/SlideShow/SlideShow"; // Assurez-vous que le nom du dossier et le fichier sont corrects
import propertiesData from "../../../logements.json";

const Shop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [propertyDetails, setPropertyDetails] = useState(null);

  useEffect(() => {
    // Trouver la propriété par ID
    const property = propertiesData.find((p) => p.id === id);

    if (!property) {
      navigate("/error"); // Rediriger vers la page d'erreur si la propriété n'est pas trouvée
    } else {
      setPropertyDetails(property);
    }
  }, [id, navigate]);

  if (!propertyDetails) {
    return <div>Loading...</div>; // Ou tout autre indicateur de chargement
  }

  const stars = propertyDetails.rating
    ? Array.from({ length: 5 }, (_, index) =>
        index < propertyDetails.rating ? fullStar : emptyStar
      )
    : [];

  return (
    <div className="shop-page">
      {/* La bannière avec une image de fond, sans titre */}
      <Banner backgroundUrl={bannerImage} />
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
        {/* Slideshow pour les images de la propriété */}
        {propertyDetails.images && propertyDetails.images.length > 0 && (
          <Slideshow images={propertyDetails.images} />
        )}
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
