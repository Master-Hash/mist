import { Link } from "react-router-dom";

export function HomePage() {
  return <>
    <h1>前端实验室</h1>
    <nav>
      <ul>
        <li>
          <Link to="/game">Game</Link>
        </li>
        <li>
          <Link to="/render-props">Render Props</Link>
        </li>
      </ul>
    </nav>
  </>;
}