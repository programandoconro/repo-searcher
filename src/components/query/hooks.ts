import { useState } from "react";
import { mutate } from "swr";
import { useSearchParams } from "../../hooks/use-search-params";
import { SEARCH_PARAMS_STATE_KEY } from "../../state";
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
    mutate(SEARCH_PARAMS_STATE_KEY, { ...searchParams, [field]: value });
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
