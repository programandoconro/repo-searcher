import "./index.css";

import { useApp } from "./hooks";

import { ThemeProvider } from "@emotion/react";
import { Box, Container, CssBaseline, Typography } from "@mui/material";

import { Header } from "../header";
import { SearchBar } from "../search-bar";
import { Table } from "../table";

function App() {
  const { theme, isQueryEmpty } = useApp();
  return (
    <ThemeProvider theme={theme}>
      <main>
        <CssBaseline />
        <Container disableGutters>
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              px: { xs: 2, sm: 3, md: 4, xl: 0 },
              py: { xs: 2, sm: 3, md: 4 },
              gap: { xs: 2, sm: 3, md: 5, lg: 10 },
            }}
          >
            <Header />
            <SearchBar />
            {isQueryEmpty ? renderQueryEmptyMessage() : <Table />}
          </Box>
        </Container>
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
          xl: "2rem",
        },
      }}
    >
      Please enter a search query to see results.
    </Typography>
  );
}

export default App;
