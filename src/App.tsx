import Sky from "./sky.jsx";
import Ground from "./ground.jsx";
import CannonBase from "./cannon-base.jsx";
import CannonPipe from "./cannon-pipe.jsx";

function App() {
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

export default App;
