import React, { useEffect } from "react";
import Collapse from "../../Components/Collapse/Collapse";

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
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <Collapse title="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse title="Service">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse title="Sécurité">
          <p>...</p>
        </Collapse>
      </section>
    </div>
  );
}

export default About;
