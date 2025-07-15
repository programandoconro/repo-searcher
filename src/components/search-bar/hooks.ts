import { useContext } from "react";

import { mutate } from "swr";
import { useResponsive } from "@/hooks/use-responsive";
import type { SearchParams } from "@/types";
import {
  SEARCH_PARAMS_STATE_KEY,
  useSearchParams,
} from "@/hooks/use-search-params";
import { QueryContext } from "@/context/query/query-context";

export const useSearchBar = () => {
  const { searchParams } = useSearchParams();
  const { query, handleQueryChange } = useContext(QueryContext);

  const handleQueryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleQueryChange(e.target.value);
  };

  const handleSearchParamsChange = <K extends keyof SearchParams>(
    field: K,
    value: SearchParams[K]
  ) => {
    mutate(SEARCH_PARAMS_STATE_KEY, {
      ...searchParams,
      [field]: value,
    });
  };

  const handleClick = () => {
    handleSearchParamsChange("query", query);
  };

  const { isMobile } = useResponsive();

  return {
    query,
    handleQueryInput,
    handleClick,
    isMobile,
    searchParams,
  };
};
