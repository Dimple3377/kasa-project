import React, { useState } from "react";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button
        className={`collapse-header ${isOpen ? "active" : ""}`}
        onClick={toggleCollapse}
      >
        {title}
        {/* Retirez la balise span pour la flèche puisqu'elle sera gérée par le pseudo-élément :after en CSS */}
      </button>
      <div className={`collapse-content ${isOpen ? "active" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
