import useSWR from "swr";
import { useSearchParams } from "../../hooks/use-search-params";
import { requestRepos } from "../../utils/request-repos";
import { useStyles } from "../../hooks/use-styles";

export const useTable = () => {
  const { searchParams } = useSearchParams();
  const { perPage } = searchParams;
  const { data, error, isLoading, mutate } = useSWR(
    ["search", searchParams],
    () => requestRepos(searchParams)
  );
  const { items, total_count } = data?.data || {};
  const { isMobile } = useStyles();

  return {
    items,
    data,
    perPage,
    error,
    isLoading,
    total_count,
    refetch: mutate,
    isMobile,
  };
};
