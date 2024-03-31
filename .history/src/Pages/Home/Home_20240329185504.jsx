import Card from "../Components/Card";
import logements from "../../logements.json";
import Banner from "../Components/Banner/Banner";
import bannerImage from "../assets/images/banniere.jpeg";
import "../Home/Home.scss";
function Home() {
  return (
    <div>
      <Banner
        backgroundUrl={bannerImage}
        title="Chez vous, partout et ailleurs"
      />
      <div className="card-container">
        {/* Ajout d'un conteneur pour les cartes */}
        {logements.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            imageUrl={logement.cover}
            description={logement.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
