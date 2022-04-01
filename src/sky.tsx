import { WIDTH, HEIGHT } from "./utils/constant.js";
function Sky() {
  return <>
    <rect
      className="fill-blue-300"
      x={WIDTH / -2}
      y={100 - HEIGHT}
      width={WIDTH}
      height={HEIGHT} />
  </>;
}

export default Sky;