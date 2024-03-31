import Card from "../Components/Card";
import logements from "../../logements.json";
function Home() {
  return (
    <div>
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
