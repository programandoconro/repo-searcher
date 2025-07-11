import { TableCell, TablePagination, TableRow } from "@mui/material";
import { usePagination } from "./hooks";

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
          slotProps={{
            toolbar: {
              sx: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              },
            },
          }}
        />
      </TableCell>
    </TableRow>
  );
}
