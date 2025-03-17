import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { Router } from "./router";
import { BrowserRouter } from "react-router";
// import "../src/style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
);
