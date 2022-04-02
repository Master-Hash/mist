// import { Component, ReactSVG, useEffect, useState } from "react";
// import type { MouseEvent, FC, ReactElement } from "react";
// import { useAppSelector } from "./app/hooks.js";
// import { selectAngle } from "./features/move/moveSlice.js";
import { Mouse } from "./Mouse.js";
import { Sky } from "./Sky.js";
import { Ground } from "./Ground.js";
import { CannonBase } from "./CannonBase.js";
import { CannonPipe } from "./CannonPipe.js";
import { calculateAngle } from "./utils/helper.js";
import { CannonBall } from "./CannonBall.js";
import { CurrentScore } from "./CurrentScore.js";

export const Game = () => {
  return <Mouse render={point =>
    <svg
      viewBox="-600 -575 1200 675"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky />
      <Ground />
      <CannonPipe rotation={calculateAngle(0, 0, point.x, point.y)} />
      <CannonBase />
      <CannonBall x={0} y={-100} />
      <CurrentScore score={67} />
    </svg>
  }
  />;
};
