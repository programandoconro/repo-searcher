import useSWR from "swr";
import { useSearchParams } from "../../hooks/use-search-params";
import { requestRepos } from "../../utils/request-repos";
import { useStyles } from "../../hooks/use-styles";

export const useTable = () => {
  const { searchParams } = useSearchParams();
  const { perPage } = searchParams;
  const { data, error, isLoading, mutate } = useSWR(
    ["search", { ...searchParams }],
    () => requestRepos({ ...searchParams, page: searchParams.page + 1 })
  );
  const { items, total_count } = data?.data || {};
  const { isMobile } = useStyles();
  const count = Math.min(total_count ?? 0, 1000); // Github API has a limit of 1000 results

  return {
    items,
    data,
    perPage,
    error,
    isLoading,
    count,
    refetch: mutate,
    isMobile,
  };
};
