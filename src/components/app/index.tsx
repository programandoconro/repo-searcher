import "./index.css";

import { useApp } from "./hooks";

import { ThemeProvider } from "@emotion/react";
import { Box, Container, CssBaseline, Link, Typography } from "@mui/material";

import { Header } from "../header";
import { SearchBar } from "../search-bar";
import { Table } from "../table";
import { QueryProviderContext } from "@/context/query/query-provider";

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
            <QueryProviderContext>
              <SearchBar />
            </QueryProviderContext>
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
        maxWidth: "800px",
        mx: "auto",
        mt: 4,
        px: 2,
        lineHeight: 1.6,
        wordBreak: "break-word",
      }}
    >
      Start by entering a search query above. You can refine your results using{" "}
      <Link
        href="https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories"
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
      >
        advanced filters
      </Link>
      , such as language, stars, or topics.
    </Typography>
  );
}

export default App;
