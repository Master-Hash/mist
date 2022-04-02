import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./app/store.js";
import { App } from "./App.js";
import { RenderProps } from "./RenderProps.js";
import "./main.css";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/dev" element={<RenderProps />} />
          <Route path="/game" element={<App />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  );
}
