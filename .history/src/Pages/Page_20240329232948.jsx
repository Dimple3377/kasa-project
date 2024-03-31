import Collapse from "../components/Collapse";

function AboutPage() {
  return (
    <div className="about-page">
      <Collapse title="Fiabilité">
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale...
        </p>
      </Collapse>
      <Collapse title="Respect">
        <p>...</p>
      </Collapse>
      <Collapse title="Service">
        <p>...</p>
      </Collapse>
      <Collapse title="Sécurité">
        <p>...</p>
      </Collapse>
    </div>
  );
}

export default AboutPage;
