import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./app/store.js";
import { App } from "./App.js";
import { Dev } from "./Dev.js";
import "./main.css";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/dev" element={<Dev />} />
          <Route path="/game" element={<App />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  );
}
