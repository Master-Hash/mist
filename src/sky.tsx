import { GROUND_WIDTH, HEIGHT } from "./utils/constant.js";
function Sky() {
  return <>
    <rect
      className="fill-blue-300"
      x={GROUND_WIDTH / -2}
      y={100 - HEIGHT}
      width={GROUND_WIDTH}
      height={HEIGHT} />
  </>;
}

export default Sky;