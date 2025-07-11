import useSWR from "swr";
import { useSearchParams } from "../../hooks/use-search-params";
import { requestRepos } from "../../utils/request-repos";
import { useStyles } from "../../hooks/use-styles";
import type { Sort } from "../../types";

export const useTable = () => {
  const { searchParams, mutate: mutateSearchParams } = useSearchParams();
  const { perPage } = searchParams;
  const { data, error, isLoading, mutate } = useSWR(
    ["search", { ...searchParams }],
    () => requestRepos(searchParams)
  );
  const { items, total_count } = data?.data || {};
  const { isMobile } = useStyles();

  const onSortToggle = ({ sort }: { sort: Sort }) => {
    const order = searchParams.order === "asc" ? "desc" : "asc";

    mutateSearchParams({
      ...searchParams,
      sort,
      order,
    });
  };

  return {
    items,
    data,
    perPage,
    error,
    isLoading,
    total_count,
    refetch: mutate,
    isMobile,
    onSortToggle,
    searchParams,
  };
};
