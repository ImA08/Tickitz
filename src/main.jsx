import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { Router } from "./router";
import { BrowserRouter } from "react-router";

import { UserProvider } from "./contexts/userContext";
// import "../src/style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>    
    <UserProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </UserProvider>
  </StrictMode>
);
