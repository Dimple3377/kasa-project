import React, { useState } from "react";
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
      <div className="collapse-header">
        {title}
        {/* Flèche rendue cliquable en étant placée dans un bouton */}
        <button>
          onClick={handleArrowClick}
          <i
            className={`fas fa-angle-up collapse-arrow ${
              isOpen ? "active" : ""
            }`}
          ></i>
        </button>
      </div>
      <div className={`collapse-content ${isOpen ? "active" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
