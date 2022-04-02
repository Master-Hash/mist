import { pathFromBezierCurve } from "./utils/helper.js";

export const CannonBase = () => {
  const baseWith = 80;
  const halfBase = 40;
  const height = 60;
  const negativeHeight = height * -1;

  const cubicBezierCurve = {
    initialAxis: {
      x: -halfBase,
      y: height,
    },
    initialControlPoint: {
      x: 20,
      y: negativeHeight,
    },
    endingControlPoint: {
      x: 60,
      y: negativeHeight,
    },
    endingAxis: {
      x: baseWith,
      y: 0,
    },
  };

  return <>
    <g>
      <path
        className="stroke-2 fill-[#a16012] stroke-[#75450e]"
        d={pathFromBezierCurve(cubicBezierCurve)}
      />
      <line
        x1={-halfBase}
        y1={height}
        x2={halfBase}
        y2={height}
        className="stroke-2 stroke-[#75450e]"
      />
    </g>
  </>;
};
