import React from 'react';

const Ground = () => {
  const groundWidth = 5000;

  return (
    <g id="ground">
      <rect
        id="ground-2"
        data-name="ground"
        x={groundWidth / -2}
        y={0}
        width={groundWidth}
        height={100}
        className="fill-green-500"
      />
      <line
        x1={groundWidth / -2}
        y1={0}
        x2={groundWidth / 2}
        y2={0}
        className="stroke-2 stroke-black"
      />
    </g>
  );
};

export default Ground;