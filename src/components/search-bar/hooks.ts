import { useState } from "react";
import { mutate } from "swr";
import {
  SEARCH_PARAMS_STATE_KEY,
  useSearchParams,
} from "../../hooks/use-search-params";
import type { SearchParams } from "../../types";

export const useQuery = () => {
  const { searchParams } = useSearchParams();
  const [queryInput, setQueryInput] = useState("");

  const handleQueryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryInput(e.target.value);
  };

  const handleSearchParamsChange = <K extends keyof SearchParams>(
    field: K,
    value: SearchParams[K]
  ) => {
    mutate(SEARCH_PARAMS_STATE_KEY, {
      ...searchParams,
      [field]: value,
      sort: undefined, // to reset sorting if it was set
    });
  };

  const handleClick = () => {
    handleSearchParamsChange("query", queryInput);
  };

  return {
    queryInput,
    handleQueryInput,
    handleClick,
  };
};
