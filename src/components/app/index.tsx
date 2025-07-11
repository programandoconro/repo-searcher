import "./index.css";

import { SearchBar } from "../search-bar";
import { Table } from "../table";
import { useApp } from "./hooks";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import { ThemeButton } from "../theme-button";

function App() {
  const { theme, toggleMode, mode } = useApp();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box display="flex" gap={5} flexDirection="column">
          <ThemeButton mode={mode} toggleMode={toggleMode} />
          <h1>Repo Searcher</h1>
          <SearchBar />
          <Table />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
