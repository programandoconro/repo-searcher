import type { createTheme } from "@mui/material";
import { createContext } from "react";

export type ThemeMode = "light" | "dark";

type ThemeContextValue = {
  mode: ThemeMode;
  toggleMode: () => void;
  theme: ReturnType<typeof createTheme>;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
);
