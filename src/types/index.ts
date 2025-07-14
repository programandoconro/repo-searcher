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

export type ColumnKey =
  | "avatar"
  | "repo"
  | "description"
  | "stars"
  | "forks"
  | "updated";

export type Column = {
  key: ColumnKey;
  label: string | ReactNode;
  colSpan: number;
  sx?: SxProps;
  render: (
    item: Item,
    isMobile?: boolean,
    repoNameHeight?: number
  ) => ReactNode;

  skeleton: ReactNode;
};
