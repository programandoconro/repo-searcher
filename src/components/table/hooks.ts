import useSWR from "swr";
import { useSearchParams } from "../../hooks/use-search-params";
import { requestRepos } from "../../utils/request-repos";

export const useTable = () => {
  const { searchParams } = useSearchParams();
  const { perPage } = searchParams;
  const { data, error, isLoading, mutate } = useSWR(
    ["search", searchParams],
    () => requestRepos(searchParams)
  );
  const { items, total_count } = data?.data || {};

  return {
    items,
    data,
    perPage,
    error,
    isLoading,
    total_count,
    refetch: mutate,
  };
};
