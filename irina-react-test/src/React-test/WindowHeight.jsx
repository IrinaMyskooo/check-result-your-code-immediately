import React, { useEffect, useState } from "react";

import "../index.css";

const WindowHeight = ({ outerHeight }) => {
  const [innerHeight, setInnerHeight] = useState(outerHeight);

  useEffect(() => {
    setInnerHeight(outerHeight);
  }, [outerHeight]);

  const handleSetInnerHeigth = (e) => {
    setInnerHeight(Number(e.target.value));
  };

  return (
    <div style={{ height: `${innerHeight}px` }} className="div-wrapper">
      <input
        onChange={handleSetInnerHeigth}
        type="number"
        value={innerHeight}
      />
    </div>
  );
};

export default WindowHeight;
