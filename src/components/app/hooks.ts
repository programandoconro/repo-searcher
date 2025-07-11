import { createTheme } from "@mui/material";
import { useState, useMemo } from "react";
import { useSearchParams } from "../../hooks/use-search-params";

export const useApp = () => {
  const { query } = useSearchParams().searchParams;
  const isQueryEmpty = query.trim() === "";
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

  return { theme, toggleMode, mode, isQueryEmpty };
};
