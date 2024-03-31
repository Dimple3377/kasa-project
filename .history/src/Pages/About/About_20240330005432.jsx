import Collapse from "../../Components/Collapse/Collapse";

import Banner from "../../Components/Banner/Banner";

import bannerImage from "../../assets/images/banniere2.jpeg";
import "../../Pages/About/About.scss";
function About() {
  return (
    <div className="about-page">
      <Banner backgroundUrl={bannerImage} />
      <section className="collapses">
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
      </section>
    </div>
  );
}

export default About;
