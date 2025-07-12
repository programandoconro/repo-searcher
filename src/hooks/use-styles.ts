import { createTheme, useMediaQuery } from "@mui/material";
import { useState, useMemo } from "react";

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
        },
      }),
    [mode]
  );
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return { theme, mode, toggleMode, isMobile };
}
