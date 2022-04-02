import { FC } from "react";
import { pathFromBezierCurve } from "./utils/helper.js";

export const CannonPipe: FC<{ rotation: number; }> = ({ rotation }) => {
  const transform = `rotate(${rotation}, 0, 0)`;

  const muzzleWidth = 40;
  const halfMuzzle = 20;
  const height = 100;
  const yBasis = 70;

  const cubicBezierCurve = {
    initialAxis: {
      x: -halfMuzzle,
      y: -yBasis,
    },
    initialControlPoint: {
      x: -40,
      y: height * 1.7,
    },
    endingControlPoint: {
      x: 80,
      y: height * 1.7,
    },
    endingAxis: {
      x: muzzleWidth,
      y: 0,
    },
  };

  return (
    <g transform={transform}>
      <path
        className="fill-[#999] stroke-[#666] stroke-2"
        d={pathFromBezierCurve(cubicBezierCurve)}
      />
      <line
        x1={-halfMuzzle}
        y1={-yBasis}
        x2={halfMuzzle}
        y2={-yBasis}
        className="fill-[#999] stroke-[#666] stroke-2"
      />
    </g>
  );
};
