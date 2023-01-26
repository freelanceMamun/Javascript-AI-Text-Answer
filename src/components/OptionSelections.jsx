import React from 'react';

const OptionSelections = ({ arrayItems, selecOptions }) => {
  return (
    <>
      <h1 className="heading">React AI App</h1>
      <div className="grid-main">
        {arrayItems.map((item, index) => {
          return (
            <div
              className="grid-child"
              key={index}
              onClick={() => selecOptions(item.option)}
            >
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OptionSelections;
