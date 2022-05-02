import { useReactLoader } from "./loader.js";

function HomePage() {
  return <>
    <h1>前端实验室</h1>
    <p></p>
  </>;
}

export default () => {
  useReactLoader(<HomePage />);
  return <></>;
};