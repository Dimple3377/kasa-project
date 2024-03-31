import Collapse from "../../Components/Collapse/Collapse";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer";
import bannerImage from "../assets/about-banner.jpg";
import "../../Pages/About/About.scss";
function About() {
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

export default About;
