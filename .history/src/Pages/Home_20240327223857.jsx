import Card from "../Components/Card";
import logements from "../logements.js";
function Home() {
  return (
    <div>
      {logements.map((logement) => (
        <Card key={logement.id} {...logement} />
      ))}
    </div>
  );
}

export default Home;
