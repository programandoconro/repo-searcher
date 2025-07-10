import { mutate } from "swr";
import { SEARCH_PARAMS_STATE_KEY } from "../model/swr-state";
import { useParams } from "./use-params";
import { useTable } from "./use-table";

export const usePagination = () => {
  const { searchParams } = useParams();
  const { data } = useTable();
  const count = data?.data.total_count ?? 0;
  const { page, perPage: rowsPerPage } = searchParams;

  const onPageChange = (_event: unknown, newPage: number) => {
    mutate(SEARCH_PARAMS_STATE_KEY, { ...searchParams, page: newPage });
  };
  const onRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    mutate(SEARCH_PARAMS_STATE_KEY, {
      ...searchParams,
      perPage: parseInt(event.target.value, 10),
      page: 0,
    });
  };

  return {
    count,
    page,
    rowsPerPage,
    onPageChange,
    onRowsPerPageChange,
  };
};
