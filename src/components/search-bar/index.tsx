import { Box, Button, Container, TextField } from "@mui/material";
import { useQuery } from "./hooks";

export function SearchBar() {
  const { queryInput, handleQueryInput, handleClick } = useQuery();

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
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleClick}
        >
          Search
        </Button>
      </Box>
    </Container>
  );
}
