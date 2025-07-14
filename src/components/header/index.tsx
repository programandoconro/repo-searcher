import { Box, Typography } from "@mui/material";
import { ThemeButton } from "../theme-button";

export function Header() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent={{ xs: "center", sm: "space-between" }}
      alignItems={{ xs: "center", sm: "initial" }}
    >
      <ThemeButton />
      <Typography
        component="h1"
        sx={{
          fontSize: {
            xs: "2rem",
            sm: "3rem",
            md: "4rem",
            lg: "5rem",
          },
          fontWeight: 600,
        }}
      >
        Repo Searcher
      </Typography>
    </Box>
  );
}
