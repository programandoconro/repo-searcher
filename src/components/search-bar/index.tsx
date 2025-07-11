import { Box, Button, Container, TextField } from "@mui/material";
import { useQuery } from "./hooks";

export function SearchBar() {
  const { queryInput, handleQueryInput, handleClick } = useQuery();

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        gap={2}
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 4 }}
      >
        <TextField
          label="Search Repos"
          variant="outlined"
          fullWidth
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
