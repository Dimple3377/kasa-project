import React, { useState } from "react";
import "./Collapse.scss"; // Assurez-vous que le chemin est correct

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={toggleCollapse}>
        {title}
        <span className={`collapse-icon ${isOpen ? "" : "closed"}`}>▼</span>
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
