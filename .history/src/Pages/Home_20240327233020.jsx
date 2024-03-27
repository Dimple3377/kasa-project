import Card from "../Components/Card";
import logements from "../logements.js";
function Home() {
  return (
    <div>
      {logements.map((logement) => (
        <Card key={logement.id} />
      ))}
    </div>
  );
}

export default Home;
