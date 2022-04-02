import { GROUND_WIDTH } from "./utils/constant.js";
const Ground = () => {
  return (
    <g id="ground">
      <rect
        id="ground-2"
        data-name="ground"
        x={GROUND_WIDTH / -2}
        y={0}
        width={GROUND_WIDTH}
        height={100}
        className="fill-green-500"
      />
      <line
        x1={GROUND_WIDTH / -2}
        y1={0}
        x2={GROUND_WIDTH / 2}
        y2={0}
        className="stroke-2 stroke-[#458232]"
      />
    </g>
  );
};

export default Ground;