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
          MuiCssBaseline: {
            // fix weird background color in mui text component when using browser suggested value
            styleOverrides: {
              "input:-webkit-autofill": {
                boxShadow:
                  mode === "light"
                    ? "0 0 0 1000px white inset !important"
                    : "0 0 0 1000px #121212 inset !important",
                WebkitTextFillColor: mode === "light" ? "#000" : "#fff",
                transition: "background-color 5000s ease-in-out 0s",
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
