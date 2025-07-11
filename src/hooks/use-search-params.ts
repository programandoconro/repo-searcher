import useSWR from "swr";
import { FALLBACK_SEARCH_PARAMS, SEARCH_PARAMS_STATE_KEY } from "../state";
import type { SearchParams } from "../types";

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
