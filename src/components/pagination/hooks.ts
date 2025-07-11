import { mutate } from "swr";
import { SEARCH_PARAMS_STATE_KEY } from "../../state";
import { useSearchParams } from "../../hooks/use-search-params";
import { useStyles } from "../../hooks/use-styles";

export const usePagination = () => {
  const { isMobile } = useStyles();
  const { searchParams } = useSearchParams();
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
    page,
    rowsPerPage,
    onPageChange,
    onRowsPerPageChange,
    isMobile,
  };
};
