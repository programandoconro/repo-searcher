import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
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
        <ArrowUpward />
      ) : (
        <ArrowDownward />
      )}
    </IconButton>
  );
}
