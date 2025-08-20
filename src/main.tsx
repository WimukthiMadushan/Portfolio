import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ClickEffect from "./Components/Utils/ClickEffect.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ClickEffect />
      <App />
    </BrowserRouter>
  </StrictMode>
);
