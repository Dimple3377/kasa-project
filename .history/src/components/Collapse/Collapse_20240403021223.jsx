import React, { useState } from "react";
import ArrowSVG from "../../assets/images/arrow.svg"; // Assurez-vous que le chemin d'accès est correct
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour gérer le clic sur la flèche
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={toggleCollapse}>
        {title}
        <img
          className={`collapse-icon ${isOpen ? "rotate" : ""}`}
          src={ArrowSVG}
          alt="Toggle Collapse"
        />
      </button>
      <div className={`collapse-content ${isOpen ? "active" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;