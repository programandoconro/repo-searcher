import { Box, Button, TextField } from "@mui/material";
import { useSearchBar } from "./hooks";
import { SortMenu } from "./sub-components/sort-menu";
import { Search } from "@mui/icons-material";

export function SearchBar() {
  const { query, handleQueryInput, handleClick, isMobile } = useSearchBar();

  return (
    <Box display="flex" gap={2} alignItems="center">
      <TextField
        multiline
        label="Search Repos"
        variant="outlined"
        fullWidth
        aria-label="Search Repositories"
        value={query}
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
  );
}
