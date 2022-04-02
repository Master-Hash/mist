import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./app/store.js";
import { Game } from "./Game.js";
import { RenderProps } from "./RenderProps.js";
import { HomePage } from "./HomePage.js";
import { App } from "./App.js";
import "./main.css";

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
