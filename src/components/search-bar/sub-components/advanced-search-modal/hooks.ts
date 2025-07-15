import { useSearchParams } from "@/hooks/use-search-params";

export const useAdvanceSearchModal = () => {
  const { mutate, searchParams } = useSearchParams();

  const onQueryBuild = (query: string) => {
    mutate({ ...searchParams, query });
  };

  return {
    onQueryBuild,
  };
};
