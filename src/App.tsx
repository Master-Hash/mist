// import { useEffect } from "react";
// import { useAppSelector } from "./app/hooks.js";
// import { selectAngle } from "./features/move/moveSlice.js";
import Sky from "./Sky.jsx";
import Ground from "./Ground.jsx";
import CannonBase from "./CannonBase.jsx";
import CannonPipe from "./CannonPipe.jsx";

export function App() {
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
