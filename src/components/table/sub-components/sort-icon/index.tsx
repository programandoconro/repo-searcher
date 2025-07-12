import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import type { Sort } from "../../../../types";
import { useSortIcon } from "./hooks";

type SortIconProps = {
  sort: Sort;
};

export function SortIcon({ sort }: SortIconProps) {
  const { onSortToggle, searchParams } = useSortIcon();
  return (
    <IconButton size="small" onClick={() => onSortToggle({ sort })}>
      {sort === searchParams.sort && searchParams.order === "asc" ? (
        <Tooltip title="Sort descending">
          <ArrowUpward />
        </Tooltip>
      ) : (
        <Tooltip title="Sort ascending">
          <ArrowDownward />
        </Tooltip>
      )}
    </IconButton>
  );
}
