import "./index.css";

import { SearchBar } from "../search-bar";
import { Table } from "../table";
import { useApp } from "./hooks";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline, Typography } from "@mui/material";
import { Header } from "../header";

function App() {
  const { theme, isQueryEmpty } = useApp();
  return (
    <ThemeProvider theme={theme}>
      <main>
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
          <Header />
          <SearchBar />
          {isQueryEmpty ? renderQueryEmptyMessage() : <Table />}
        </Box>
      </main>
    </ThemeProvider>
  );
}

function renderQueryEmptyMessage() {
  return (
    <Typography
      variant="h6"
      component="h2"
      color="text.secondary"
      align="center"
      sx={{
        fontSize: {
          xs: "1rem",
          sm: "1.25rem",
          md: "1.5rem",
          lg: "1.75rem",
        },
      }}
    >
      Please enter a search query to see results.
    </Typography>
  );
}

export default App;
