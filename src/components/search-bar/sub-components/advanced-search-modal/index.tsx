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
  const {
    language,
    setLanguage,
    user,
    setUser,
    topic,
    setTopic,
    stars,
    setStars,
    helpWantedIssues,
    setHelpWantedIssues,
    setCreated,
    created,
    searchTerm,
    setSearchTerm,
    goodFirstIssues,
    setGoodFirstIssues,
    handleBuildQuery,
    clearEntries,
  } = useAdvanceSearchModal({ closeModal });

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
          clear
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
          />
          <TextField
            label="User"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            fullWidth
          />
          <TextField
            label="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            fullWidth
          />
          <TextField
            label="Stars (e.g. >100)"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            fullWidth
          />
          <TextField
            label="Created (e.g. >=2024-01-01)"
            value={created}
            onChange={(e) => setCreated(e.target.value)}
            fullWidth
          />
          <TextField
            label="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="e.g. JavaScript, Rust"
            fullWidth
          />
          <TextField
            label="Good First Issues (e.g. >0)"
            value={goodFirstIssues}
            onChange={(e) => setGoodFirstIssues(e.target.value)}
            fullWidth
          />
          <TextField
            label="Help Wanted Issues (e.g. >0)"
            value={helpWantedIssues}
            onChange={(e) => setHelpWantedIssues(e.target.value)}
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
