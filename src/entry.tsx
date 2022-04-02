import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./app/store.js";
import { Game } from "./game/Game.js";
import { RenderProps } from "./render-props/RenderProps.js";
import { HomePage } from "./HomePage.js";
import "./main.css";

function App() {
  return <>
    <header></header>
    <main><Outlet /></main>
    <footer></footer>
  </>;
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="render-props" element={<RenderProps />} />
            <Route path="game" element={<Game />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  );
}
