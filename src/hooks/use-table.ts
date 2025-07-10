import useSWR from "swr";
import { requestRepositories } from "../utils/requests";
import { useParams } from "./use-params";

export const useTable = () => {
  const { searchParams } = useParams();
  const { data, error, isLoading } = useSWR(["search", searchParams], () =>
    requestRepositories(searchParams)
  );
  const { items } = data?.data || {};

  return {
    items,
    searchParams,
    data,
    error,
    isLoading,
  };
};
