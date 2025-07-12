import { TableCell, TablePagination, TableRow } from "@mui/material";
import { usePagination } from "./hooks";
import { IconButton } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

type PaginationProps = {
  count: number;
};
export function Pagination({ count }: PaginationProps) {
  const { page, rowsPerPage, onPageChange, onRowsPerPageChange, isMobile } =
    usePagination();
  return (
    <TableRow>
      <TableCell colSpan={isMobile ? 4 : 7}>
        <TablePagination
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          rowsPerPageOptions={[1, 5, 10, 25, 50, 100]}
          ActionsComponent={renderTablePaginationActions}
          slotProps={{
            toolbar: {
              sx: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: isMobile ? "center" : "right",
              },
            },
          }}
        />
      </TableCell>
    </TableRow>
  );
}

type TablePaginationActionsProps = {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
};

function renderTablePaginationActions(props: TablePaginationActionsProps) {
  const { count, page, rowsPerPage, onPageChange } = props;

  const lastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);

  return (
    <div style={{ flexShrink: 0 }}>
      <IconButton
        onClick={(e) => onPageChange(e, 0)}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={(e) => onPageChange(e, page - 1)}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={(e) => onPageChange(e, page + 1)}
        disabled={page >= lastPage}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={(e) => onPageChange(e, lastPage)}
        disabled={page >= lastPage}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </div>
  );
}
