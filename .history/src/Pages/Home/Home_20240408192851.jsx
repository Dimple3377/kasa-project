import Card from "../../Components/Card/Card";
import logements from "../../../logements.json";
import Banner from "../../Components/Banner/Banner";
import bannerImage from "../../assets/images/banniere.jpeg";
import Footer from "../../Components/Footer/Footer";
import "../../Pages/Home/Home.scss";
function Home() {
  return (
    <div className="home-page">
      <Banner
        backgroundUrl={bannerImage}
        title="Chez vous, partout et ailleurs"
      />
      <div className="card-container">
        {/* Ajout d'un conteneur pour les cartes */}
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            imageUrl={logement.cover}
            description={logement.description}
          />
        ))}
      </div>
      <Footer customClass="home-footer" />{" "}
      {/* Ajout du Footer avec une classe personnalisée */}
    </div>
  );
}

export default Home;
