import React from "react";

const Display = ({ h4, p }) => {
  return (
    <div>
      <h4>{h4}</h4>
      <p className="over-line">{p}</p>
    </div>
  );
};

export default Display;
