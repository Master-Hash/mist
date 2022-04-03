import type { FC } from "react";
import { pathFromBezierCurve } from "./utils/helper.js";
import type { Point } from "./utils/type.js";

const FlyingObjectBase: FC<Point> = ({ x, y }) => {
  return (
    <ellipse
      cx={x}
      cy={y}
      rx="40"
      ry="10"
      className="fill-[#979797] stroke-[#5c5c5c]"
    />
  );
};

const FlyingObjectTop: FC<Point> = ({ x, y }) => {
  const baseWith = 40;
  const halfBase = 20;
  const height = 25;

  const cubicBezierCurve = {
    initialAxis: {
      x: x - halfBase,
      y: y,
    },
    initialControlPoint: {
      x: 10,
      y: -height,
    },
    endingControlPoint: {
      x: 30,
      y: -height,
    },
    endingAxis: {
      x: baseWith,
      y: 0,
    },
  };

  return (
    <path
      className="fill-[#b6b6b6] stroke-[#7d7d7d]"
      d={pathFromBezierCurve(cubicBezierCurve)}
    />
  );
};

export const FlyingObject: FC<Point> = (props) => {
  return <g>
    <FlyingObjectBase {...props} />
    <FlyingObjectTop {...props} />
  </g>;
};
