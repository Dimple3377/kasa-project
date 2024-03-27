import Card from "../Components/Card";
import Card from "../Components/Banner";
import logements from "../logements.js";
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
