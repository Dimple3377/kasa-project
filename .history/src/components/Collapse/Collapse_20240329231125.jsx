import React, { useState } from "react";
import "./Collapse.scss"; // Assurez-vous d'avoir créé ce fichier SCSS pour les styles

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <button className="collapse-toggle" onClick={toggleOpen}>
        {title}
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
