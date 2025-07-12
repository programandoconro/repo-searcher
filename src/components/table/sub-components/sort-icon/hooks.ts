import { useSearchParams } from "../../../../hooks/use-search-params";
import type { Sort } from "../../../../types";

export const useSortIcon = () => {
  const { searchParams, mutate: mutateSearchParams } = useSearchParams();

  const onSortToggle = ({ sort }: { sort: Sort }) => {
    const order = searchParams.order === "asc" ? "desc" : "asc";
    mutateSearchParams({
      ...searchParams,
      sort,
      order,
    });
  };

  return {
    onSortToggle,
    searchParams,
  };
};
