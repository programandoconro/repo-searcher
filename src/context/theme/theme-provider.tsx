import { createTheme } from "@mui/material";
import { useMemo, useState, type ReactNode } from "react";
import { ThemeContext, type ThemeMode } from "./theme-context";

export function ThemeProviderContext({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(
    localStorage.getItem("mode") === "light" ? "light" : "dark"
  );

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        components: {
          MuiTableCell: {
            styleOverrides: {
              root: {
                padding: "8px",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
