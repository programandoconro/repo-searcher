import { createTheme, useMediaQuery } from "@mui/material";
import { useState, useMemo } from "react";

export function useStyles() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
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
