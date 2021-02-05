import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [indexActive, setIndex] = useState(null);

  const onTitleClick = (index) => setIndex(index);


  return (
    <div className="ui styled accordion">
      {items.map((item, index) => {
            const active = index === indexActive ? 'active' : '';
        return (
          <React.Fragment key={item.title}>
            <div className="title" onClick={() => onTitleClick(index)}>
              <i className="dropdown icon"></i>
              {item.title}
            </div>
            <div className={`content ${active}`}>
              <p>{item.content}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Accordion;
