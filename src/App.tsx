import Sky from "./sky.jsx";
import Ground from "./ground.jsx";

function App() {
  return <>
    <svg
      viewBox="-600 -575 1200 675"
      preserveAspectRatio="xMidYMid meet"
    >
      <Sky />
      <Ground />
      <circle cx={0} cy={0} r={50} />
    </svg>
  </>;
}

export default App;
