import Card from "../Components/Card";
import logements from "../../logements.json";
import Banner from "../Components/Banner/Banner";
function Home() {
  return (
    <div>
      <Banner
        backgroundUrl="../assets/images/banniere.jpeg"
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
