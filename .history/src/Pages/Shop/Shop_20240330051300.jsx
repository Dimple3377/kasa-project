import React, { useEffect } from "react";
import Collapse from "../../Components/Collapse/Collapse";

import Banner from "../../Components/Banner/Banner";

import bannerImage from "../../assets/images/banniere2.jpeg";
import "../../Pages/Shop/Shop.scss";
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
      <section className="collapses">
        <Collapse title="Description">
          <p>Vous serez à 50m...</p>
        </Collapse>
        <Collapse title="Equipements">
          <p>...</p>
        </Collapse>
      </section>
    </div>
  );
}

export default About;
