import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import "./main.css";

const HomePage = lazy(() => import("./HomePage.js"));
const RenderProps = lazy(() => import("./render-props/RenderProps.js"));
const BreakoutGame = lazy(() => import("./breakout-game/App.js"));


function Base() {
  // 不用 `<StrictMode>` -- 快速 mount，unmounted 可吃不消
  return <>
    <BrowserRouter>
      <nav className="text-center h-6">
        <ul className="inline-flex space-x-24 justify-center w-screen">
          <li>
            <Link to="/">Mist</Link>
          </li>
          <li>
            <Link to="/breakout">Breakout Game</Link>
          </li>
          <li>
            <Link to="/render-props">Render Props</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<>...</>}>
        <Routes>
          {/* 这一行显然是来搞笑的 */}
          <Route path="/" element={<Outlet />}>
            <Route index element={<HomePage />} />
            <Route path="render-props" element={<RenderProps />} />
            <Route path="breakout" element={<BreakoutGame />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>;
}

const container = document.querySelector("#base")!;
const root = createRoot(container);
root.render(<Base />);

