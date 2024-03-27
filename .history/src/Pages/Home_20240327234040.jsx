import Card from "../Components/Card";
import logements from "../logements.js";
function Home() {
  return (
    <div>
      {logements.map((logement) => (
        <Card
          key={logement.id}
          title={logement.title}
          imageUrl={logement.imageUrl}
          description={logement.description}
        />
      ))}
    </div>
  );
}

export default Home;
