import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  TextField,
} from "@mui/material";

import { useAdvanceSearchModal } from "./hooks";

export function AdvancedSearchModal({
  open,
  closeModal,
}: {
  open: boolean;
  closeModal: () => void;
}) {
  const { fields, setField, handleBuildQuery, clearEntries } =
    useAdvanceSearchModal({ closeModal });

  return (
    <Dialog
      open={open}
      onClose={closeModal}
      fullWidth
      maxWidth="lg"
      container={document.body}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Advanced Search Filters
        <Button size="small" variant="text" onClick={clearEntries}>
          Clear
        </Button>
      </DialogTitle>

      <DialogContent>
        <Box
          display="flex"
          flexWrap="wrap"
          gap={2}
          justifyContent="space-between"
          mt={1}
        >
          <TextField
            label="Search"
            value={fields.searchTerm}
            onChange={(e) => setField("searchTerm", e.target.value)}
            fullWidth
          />
          <TextField
            label="User"
            value={fields.user}
            onChange={(e) => setField("user", e.target.value)}
            fullWidth
          />
          <TextField
            label="Topic"
            value={fields.topic}
            onChange={(e) => setField("topic", e.target.value)}
            fullWidth
          />
          <TextField
            label="Stars (e.g. >100)"
            value={fields.stars}
            onChange={(e) => setField("stars", e.target.value)}
            fullWidth
          />
          <TextField
            label="Created (e.g. >=2024-01-01)"
            value={fields.created}
            onChange={(e) => setField("created", e.target.value)}
            fullWidth
          />
          <TextField
            label="Language"
            value={fields.language}
            onChange={(e) => setField("language", e.target.value)}
            placeholder="e.g. JavaScript, Rust"
            fullWidth
          />
          <TextField
            label="Good First Issues (e.g. >0)"
            value={fields.goodFirstIssues}
            onChange={(e) => setField("goodFirstIssues", e.target.value)}
            fullWidth
          />
          <TextField
            label="Help Wanted Issues (e.g. >0)"
            value={fields.helpWantedIssues}
            onChange={(e) => setField("helpWantedIssues", e.target.value)}
            fullWidth
          />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={closeModal}>Cancel</Button>
        <Button variant="contained" onClick={handleBuildQuery}>
          Apply Filters
        </Button>
      </DialogActions>
    </Dialog>
  );
}
