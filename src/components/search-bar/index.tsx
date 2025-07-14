import { Box, Button, Container, TextField } from "@mui/material";
import { useSearchBar } from "./hooks";
import { SortMenu } from "./sub-components/sort-menu";
import { Search } from "@mui/icons-material";

export function SearchBar() {
  const { queryInput, handleQueryInput, handleClick, isMobile } =
    useSearchBar();

  return (
    <Container disableGutters maxWidth="sm">
      <Box display="flex" gap={2} alignItems="center" justifyContent="center">
        <TextField
          label="Search Repos"
          variant="outlined"
          fullWidth
          aria-label="Search Repositories"
          value={queryInput}
          onChange={handleQueryInput}
        />
        <SortMenu />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleClick}
          sx={{ gap: 1 }}
        >
          {!isMobile ? "Search" : null}
          <Search />
        </Button>
      </Box>
    </Container>
  );
}
