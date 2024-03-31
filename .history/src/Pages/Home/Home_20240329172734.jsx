import Card from "../Components/Card";
import logements from "../../logements.json";
import Banner from "../Components/Banner/Banner";
import bannerImage from "../assets/images/banniere.jpeg";
function Home() {
  return (
    <div>
      <Banner
        backgroundUrl={bannerImage}
        title="Chez vous, partout et ailleurs"
      ></Banner>
      {logements.map((logement) => (
        <Card
          key={logement.id}
          title={logement.title}
          imageUrl={logement.cover}
          description={logement.description}
        />
      ))}
    </div>
  );
}

export default Home;
