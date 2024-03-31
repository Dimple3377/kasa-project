import React, { useState, useEffect } from "react";
import Collapse from "../../Components/Collapse/Collapse";
import Banner from "../../Components/Banner/Banner";
import bannerImage from "../../assets/images/banniere2.jpeg";
import "../../Pages/About/About.scss";

function About() {
  const [openedCollapses, setOpenedCollapses] = useState({});

  useEffect(() => {
    // Ajouter une classe spécifique au body lors du montage du composant
    document.body.classList.add("about-page-body");
    // Nettoyer en retirant la classe lorsque le composant est démonté
    return () => document.body.classList.remove("about-page-body");
  }, []);

  const toggleCollapse = (key) => {
    setOpenedCollapses((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="about-page">
      <Banner backgroundUrl={bannerImage} />
      <section className="collapses">
        {["Fiabilité", "Respect", "Service", "Sécurité"].map((item, index) => (
          <Collapse
            key={index}
            title={item}
            isOpen={openedCollapses[item]}
            onClick={() => toggleCollapse(item)}
          >
            <p>Le texte pour {item.toLowerCase()}...</p>
          </Collapse>
        ))}
      </section>
    </div>
  );
}

export default About;
