import { Box, Alert, AlertTitle, Button } from "@mui/material";

export function Error({ refetch }: { refetch: () => void }) {
  return (
    <Box my={4} sx={{ display: "block", margin: "auto" }}>
      <Alert severity="error" variant="outlined" sx={{ cursor: "pointer" }}>
        <AlertTitle>Error</AlertTitle>
        Something went wrong while loading the data.{" "}
        <Button size="small" onClick={refetch}>
          Retry
        </Button>
      </Alert>
    </Box>
  );
}
