import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { Router } from "./router";
import { BrowserRouter } from "react-router";
import store from "./redux/store";
import { Provider } from "react-redux";

import { UserProvider } from "./contexts/userContext";
// import "../src/style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <UserProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </UserProvider>
    </Provider>
  </StrictMode>
);
