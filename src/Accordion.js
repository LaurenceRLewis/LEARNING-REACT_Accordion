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
        <div
          className="accordion-item"
          key={item.title + index}
          role="presentation"
        >
          <div
            className="accordion-header"
            id={`heading-${index}`}
            role="tab"
            onClick={() => onTitleClick(index)}
          >
            <h2 className="accordion-title">{item.title}</h2>
          </div>
          <div
            className={`accordion-body ${
              activeIndex === index ? "show" : "hide"
            }`}
            aria-labelledby={`heading-${index}`}
            role="tabpanel"
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
