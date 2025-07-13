import { Box, Typography } from "@mui/material";
import { ThemeButton } from "../theme-button";
import { useHeader } from "./hooks";

export function Header() {
  const { mode, toggleMode } = useHeader();
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
    >
      <ThemeButton mode={mode} toggleMode={toggleMode} />

      <Typography
        component="h1"
        sx={{
          fontSize: {
            xs: "1.75rem",
            sm: "2.25rem",
            md: "2.75rem",
            lg: "3rem",
          },
          fontWeight: 600,
        }}
      >
        Repo Searcher
      </Typography>
    </Box>
  );
}
