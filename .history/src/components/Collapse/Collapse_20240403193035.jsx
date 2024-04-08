import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleArrowClick = () => {
    // Suppression de e.stopPropagation();
    console.log("Clic sur la flèche, isOpen avant changement:", isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={handleArrowClick}>
        {title}
        <FontAwesomeIcon
          icon={faAngleUp}
          style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
            transition: "transform 0.3s ease",
          }}
        />
      </div>
      <div className={`collapse-content ${isOpen ? "active" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
