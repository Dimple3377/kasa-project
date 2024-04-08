import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour gérer le clic sur la flèche
  const handleArrowClick = (e) => {
    // Pour éviter que le clic sur la flèche affecte d'autres éléments
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={handleArrowClick}>
        {title}
        {/* Utilisation de Font Awesome pour la flèche */}
        <FontAwesomeIcon
          icon={faAngleUp}
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
          rotation={isOpen ? 180 : 0}
        />
      </div>
      <div className={`collapse-content ${isOpen ? "active" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
