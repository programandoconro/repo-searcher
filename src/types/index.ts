import type { SxProps } from "@mui/material";
import type { ReactNode } from "react";
import type { RepoSearchResultItem } from "./repo-schema";

export type SearchParams = {
  query: string;
  perPage: number;
  order?: Order;
  page: number;
  sort?: Sort;
};
export type Sort = "stars" | "forks" | "help-wanted-issues" | "updated";
export type Order = "desc" | "asc";

export type Item = RepoSearchResultItem;

export type Column = {
  key: string;
  label: string;
  colSpan: number;
  sx?: SxProps;
  render: (item: Item, isMobile?: boolean) => ReactNode;
  skeleton: ReactNode;
  sortKey?: Sort;
};
