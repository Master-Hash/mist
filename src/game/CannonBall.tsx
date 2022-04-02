import type { FC } from "react";
import type { Point } from "./utils/type.js";

export const CannonBall: FC<Point> = ({ x, y }) => {
  return (
    <ellipse
      className="fill-[#777] stroke-[#444] stroke-[2px]"
      cx={x}
      cy={y}
      rx="16"
      ry="16"
    />
  );
};