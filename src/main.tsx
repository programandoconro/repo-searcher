import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/index.tsx";
import { ThemeProviderContext } from "./context/theme/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProviderContext>
      <App />
    </ThemeProviderContext>
  </StrictMode>
);
