import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppProvider } from "@app/context/AppProvider";
import { App } from "@app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
