import {
  Box,
  Button,
  Menu,
  MenuItem,
  Tooltip,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import {
  ArrowDownward,
  ArrowUpward,
  FilterList,
  Help,
  Star,
  Update,
} from "@mui/icons-material";
import ForkRightIcon from "@mui/icons-material/ForkRight";

import type { Sort } from "../../../../types";

import { useSortMenu } from "./hooks";

const sortOptions: { key: Sort; label: string; icon: React.ReactNode }[] = [
  { key: "stars", label: "Stars", icon: <Star color="primary" /> },
  { key: "forks", label: "Forks", icon: <ForkRightIcon color="primary" /> },
  {
    key: "help-wanted-issues",
    label: "Help Wanted Issues",
    icon: <Help color="primary" />,
  },
  { key: "updated", label: "Last Update", icon: <Update color="primary" /> },
];

export function SortMenu() {
  const {
    open,
    handleClick,
    handleClose,
    handleSortBy,
    sort,
    order,
    toggleOrder,
    anchorEl,
  } = useSortMenu();

  return (
    <Box>
      <Tooltip title="Sort options">
        <Button
          onClick={handleClick}
          aria-controls={open ? "sort-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{ minWidth: 0, padding: 1 }}
        >
          <FilterList />
        </Button>
      </Tooltip>

      <Menu
        id="sort-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{ list: { "aria-labelledby": "sort-button" } }}
        sx={{ minWidth: 220 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box
          px={2}
          py={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="subtitle2">Order</Typography>
          <Tooltip title={order === "asc" ? "Ascending" : "Descending"}>
            <IconButton size="small" onClick={toggleOrder}>
              {order === "asc" ? (
                <ArrowUpward color="primary" fontSize="small" />
              ) : (
                <ArrowDownward color="primary" fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
        {sortOptions.map(({ key, label, icon }) => (
          <MenuItem
            key={key}
            selected={sort === key}
            onClick={() => handleSortBy(key)}
            sx={{ gap: 1 }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
