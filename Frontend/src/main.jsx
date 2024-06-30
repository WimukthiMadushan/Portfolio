import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import SideBar from "./Components/SideBar.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import CerificatesCard from "./Components/CerificatesCard.jsx";
import Certificates from "./Components/Certificates.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
