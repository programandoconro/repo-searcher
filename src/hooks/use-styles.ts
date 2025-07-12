import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";

export function useStyles() {
  const storedMode =
    localStorage.getItem("mode") === "light" ? "light" : "dark";
  const [mode, setMode] = useState<"light" | "dark">(storedMode);

  const toggleMode = () => {
    const newMode = storedMode === "light" ? "dark" : "light";
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

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return { theme, mode, toggleMode, isMobile };
}
