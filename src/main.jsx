import "./vendor/fonts/fonts.css";
import "./index.css";

import App from "./components/App/App.jsx";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

// stage-1-frontend-api

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
