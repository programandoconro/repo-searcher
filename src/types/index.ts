export type SearchParams = {
  query: string;
  perPage: number;
  order?: Order;
  page: number;
  sort?: Sort;
};
export type Sort = "stars" | "forks" | "help-wanted-issues" | "updated";
export type Order = "desc" | "asc";
