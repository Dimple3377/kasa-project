import React, { useState } from "react";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={handleToggle}>
        <span className="collapse-title">{title}</span>
        <span className={`collapse-icon ${isOpen ? "open" : ""}`}>
          &#x25BC;
        </span>
      </button>
      <div className={`collapse-body ${isOpen ? "open" : ""}`}>
        {isOpen && <div className="collapse-content">{children}</div>}
      </div>
    </div>
  );
}

export default Collapse;
