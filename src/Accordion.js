import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={item.title + index}>
          <button
            type="button"
            aria-expanded={activeIndex === index ? "true" : "false"}
            aria-controls={`accordion-body-${index}`}
            id={`btn-${index}`}
            className="accordion-header"
            onClick={() => onTitleClick(index)}
          >
            {item.title}
          </button>
          <div
            role="tabpanel"
            className={`accordion-body ${
              activeIndex === index ? "show" : "hide"
            }`}
            aria-labelledby={`btn-${index}`}
            id={`accordion-body-${index}`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
