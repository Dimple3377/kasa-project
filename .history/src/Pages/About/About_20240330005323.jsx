import React, { useEffect } from "react";
import Collapse from "../../Components/Collapse/Collapse";

import Banner from "../../Components/Banner/Banner";

import bannerImage from "../../assets/images/banniere2.jpeg";
import "../../Pages/About/About.scss";
function About() {
  useEffect(() => {
    // Ajouter une classe spécifique au body lors du montage du composant
    document.body.classList.add("about-page-body");

    // Nettoyer en retirant la classe lorsque le composant est démonté
    return () => document.body.classList.remove("about-page-body");
  }, []);
  return (
    <div className="about-page">
      <Banner backgroundUrl={bannerImage} />
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
    </div>
  );
}

export default About;
