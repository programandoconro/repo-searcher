import "./index.css";
import { TableCell, TablePagination, TableRow } from "@mui/material";
import { usePagination } from "../../hooks/use-pagination";

export function Pagination() {
  const { count, page, rowsPerPage, onPageChange, onRowsPerPageChange } =
    usePagination();
  return (
    <TableRow>
      <TableCell colSpan={6}>
        <TablePagination
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          rowsPerPageOptions={[1, 5, 10, 25, 50, 100]}
        />
      </TableCell>
    </TableRow>
  );
}
