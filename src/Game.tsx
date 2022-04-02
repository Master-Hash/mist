// import { useEffect } from "react";
// import { useAppSelector } from "./app/hooks.js";
// import { selectAngle } from "./features/move/moveSlice.js";
import Sky from "./Sky.js";
import Ground from "./Ground.js";
import CannonBase from "./CannonBase.js";
import CannonPipe from "./CannonPipe.js";

export function Game() {
  // const angle = useAppSelector(selectAngle);
  return <>
    <svg
      viewBox="-600 -575 1200 675"
      preserveAspectRatio="xMidYMid meet"
    >
      <Sky />
      <Ground />
      <CannonPipe rotation={45} />
      <CannonBase />
    </svg>
  </>;
}
