import useSWR from "swr";

import { useResponsive } from "@/hooks/use-responsive";
import { useSearchParams } from "@/hooks/use-search-params";
import { requestRepos } from "@/utils/request-repos";

export const useTable = () => {
  const { searchParams } = useSearchParams();
  const { perPage, page } = searchParams;
  const { data, error, isLoading, mutate } = useSWR(
    ["search", { ...searchParams }],
    () => requestRepos({ ...searchParams, page: page + 1 })
  );
  const { items, total_count } = data?.data || {};
  const { isMobile } = useResponsive();
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
