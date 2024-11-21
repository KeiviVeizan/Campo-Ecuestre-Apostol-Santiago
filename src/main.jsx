import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import App from './App.jsx'
// import PiscinaAR from "./piscina_AR";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
