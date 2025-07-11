export type SearchParams = {
  query: string;
  perPage: number;
  order?: Order;
  page: number;
  sort?: Sort;
};
type Sort = "stars" | "forks" | "help-wanted-issues" | "updated";
type Order = "desc" | "asc";
