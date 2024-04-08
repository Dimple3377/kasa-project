import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleArrowClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={handleArrowClick}>
        {title}
        <FontAwesomeIcon
          icon={faAngleUp}
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
        />
      </div>
      <div className={`collapse-content ${isOpen ? "active" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
