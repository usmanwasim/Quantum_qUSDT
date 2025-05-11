import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AppKitProvider } from "./wagmi.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppKitProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppKitProvider>
  </StrictMode>
);
