import useSWR, { mutate } from "swr";
import {
  FALLBACK_SEARCH_PARAMS,
  SEARCH_PARAMS_STATE_KEY,
} from "../model/swr-state";
import type { SearchParams } from "../utils/requests";

export const useParams = () => {
  const { data: searchParams = FALLBACK_SEARCH_PARAMS } = useSWR<SearchParams>(
    SEARCH_PARAMS_STATE_KEY,
    null,
    { fallbackData: FALLBACK_SEARCH_PARAMS }
  );
  const handleSearchParamsChange = <K extends keyof SearchParams>(
    field: K,
    value: SearchParams[K]
  ) => {
    mutate(SEARCH_PARAMS_STATE_KEY, { ...searchParams, [field]: value });
  };

  return {
    searchParams,
    handleSearchParamsChange,
  };
};
