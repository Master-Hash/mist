import type { FC } from "react";

export const CurrentScore: FC<{ score: number; }> = ({ score }) => {
  return (
    <g filter="url(#shadow)">
      <text className="text-[80px] fill-[#d6d33e]" x="400" y="80">
        {score}
      </text>
    </g>
  );
};
