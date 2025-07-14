import { useState } from "react";

import type { Sort } from "@/types";
import { useSearchParams } from "@/hooks/use-search-params";

export const useSortMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { mutate, searchParams } = useSearchParams();
  const { sort, order } = searchParams;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const handleSortBy = (sort: Sort) => {
    mutate({ ...searchParams, sort });
    handleClose();
  };

  const toggleOrder = () => {
    const newOrder = order === "asc" ? "desc" : "asc";
    mutate({ ...searchParams, order: newOrder });
  };

  return {
    open,
    sort,
    handleClick,
    handleClose,
    handleSortBy,
    anchorEl,
    order,
    toggleOrder,
  };
};
