import Collapse from "../../Components/Collapse/Collapse";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import bannerImage from "../../assets/images/banniere2.jpeg";
import "../../Pages/About/About.scss";
function About() {
  return (
    <div className="about-page">
      <Header />
      <Banner image={bannerImage} title="À Propos de Nous" />
      <section className="collapses"></section>
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
      <Footer />
    </div>
  );
}

export default About;
