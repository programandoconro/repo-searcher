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
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box display="flex" gap={5} flexDirection="column">
          <ThemeButton mode={mode} toggleMode={toggleMode} />
          <Typography variant="h3" component="h1">
            Repo Searcher
          </Typography>
          <SearchBar />
          {isQueryEmpty ? (
            <Typography variant="h6" color="text.secondary" align="center">
              Please enter a search query to see results.
            </Typography>
          ) : (
            <Table />
          )}
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
