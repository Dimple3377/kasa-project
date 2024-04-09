import React, { useEffect } from "react";
import Collapse from "../../Components/Collapse/Collapse";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";

import bannerImage from "../../assets/images/banniere2.jpeg";
import "./About.scss";
function About() {
  useEffect(() => {
    document.body.classList.add("about-page-body");

    return () => document.body.classList.remove("about-page-body");
  }, []);
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
      <Footer customClass="about-footer" />
    </div>
  );
}

export default About;
