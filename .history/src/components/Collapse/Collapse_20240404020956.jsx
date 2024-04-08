import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./Collapse.scss"; // Assurez-vous que le chemin est correct

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        {title}
        <FontAwesomeIcon
          icon={faAngleUp}
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
          style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
        />
      </div>
      <div className={`collapse-content ${isOpen ? "active" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
