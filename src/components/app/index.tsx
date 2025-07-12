import "./index.css";

import { SearchBar } from "../search-bar";
import { Table } from "../table";
import { useApp } from "./hooks";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline, Typography } from "@mui/material";
import { ThemeButton } from "../theme-button";

function App() {
  const { theme, toggleMode, mode, isQueryEmpty } = useApp();
  return (
    <main>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            px: { xs: 2, sm: 3, md: 6, lg: 10 },
            py: { xs: 2, sm: 3, md: 4 },
            gap: { xs: 2, sm: 3, md: 5, lg: 7 },
          }}
        >
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

          <SearchBar />

          {isQueryEmpty ? (
            <Typography
              variant="h6"
              component="h2"
              color="text.secondary"
              align="center"
            >
              Please enter a search query to see results.
            </Typography>
          ) : (
            <Table />
          )}
        </Box>
      </ThemeProvider>
    </main>
  );
}

export default App;
