import type { FC } from "react";
import { pathFromBezierCurve } from "./utils/helper.js";
import type { Point } from "./utils/type.js";

export const Heart: FC<Point> = ({ x, y }) => {
  const heartStyle = {
    fill: '#da0d15',
    stroke: '#a51708',
    strokeWidth: '2px',
  };

  const leftSide = {
    initialAxis: {
      x: x,
      y: y,
    },
    initialControlPoint: {
      x: -20,
      y: -20,
    },
    endingControlPoint: {
      x: -40,
      y: 10,
    },
    endingAxis: {
      x: 0,
      y: 40,
    },
  };

  const rightSide = {
    initialAxis: {
      x: x,
      y: y,
    },
    initialControlPoint: {
      x: 20,
      y: -20,
    },
    endingControlPoint: {
      x: 40,
      y: 10,
    },
    endingAxis: {
      x: 0,
      y: 40,
    },
  };

  return (
    <g filter="url(#shadow)">
      <path
        style={heartStyle}
        d={pathFromBezierCurve(leftSide)}
      />
      <path
        style={heartStyle}
        d={pathFromBezierCurve(rightSide)}
      />
    </g>
  );
};
