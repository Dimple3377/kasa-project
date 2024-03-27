import Card from "../components/Card";
import jsonData from "../logements.json";

function Home() {
  return (
    <div>
      {jsonData.map((property) => (
        <Card
          key={property.id} // Utilisez une clé unique pour chaque propriété
          title={property.title}
          imageUrl={property.imageUrl}
          description={property.description}
        />
      ))}
    </div>
  );
}
