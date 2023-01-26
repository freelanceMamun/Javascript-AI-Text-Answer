import React from 'react';

const Translations = ({ doStuff, setInput, result }) => {
  return (
    <div className="translate">
      <textarea
        onChange={(e) => setInput(e.target.value)}
        className="textArea"
        cols={50}
        rows={20}
      ></textarea>
      <button onClick={doStuff} className="action-button">
        Do your Stuff
      </button>
      <p>{result}</p>
    </div>
  );
};

export default Translations;
