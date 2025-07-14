import useSWR from "swr";
import type { SearchParams } from "../types";

export const SEARCH_PARAMS_STATE_KEY = "search-params-global-state";

export const FALLBACK_SEARCH_PARAMS: SearchParams = {
  query: "",
  page: 0,
  perPage: 5,
};

export const useSearchParams = () => {
  const { data: searchParams = FALLBACK_SEARCH_PARAMS, mutate } =
    useSWR<SearchParams>(SEARCH_PARAMS_STATE_KEY, null, {
      fallbackData: FALLBACK_SEARCH_PARAMS,
    });

  return {
    searchParams,
    mutate,
  };
};
