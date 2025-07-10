import type { SearchParams } from "../utils/requests";

export const SEARCH_PARAMS_STATE_KEY = "search-params-global-state";

export const FALLBACK_SEARCH_PARAMS: SearchParams = {
  query: "python",
  page: 0,
  perPage: 10,
};
