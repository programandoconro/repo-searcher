import useSWR from "swr";
import { useSearchParams } from "../../hooks/use-search-params";
import { requestRepos } from "../../utils/request-repos";

export const useTable = () => {
  const { searchParams } = useSearchParams();
  const { data, error, isLoading } = useSWR(["search", searchParams], () =>
    requestRepos(searchParams)
  );
  const { items, total_count } = data?.data || {};

  return {
    items,
    data,
    error,
    isLoading,
    total_count,
  };
};
