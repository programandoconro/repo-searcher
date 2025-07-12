import "./index.css";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Table as MuiTable,
  Box,
} from "@mui/material";
import { Pagination } from "../pagination";
import { useTable } from "./hooks";
import type { RepoSchema } from "../../types/repo-schema";
import { Error } from "./sub-components/error";
import { SortIcon } from "./sub-components/sort-icon";
import { columns } from "./sub-components/columns";

export function Table() {
  const { items, total_count, perPage, isLoading, error, refetch, isMobile } =
    useTable();

  if (error) return <Error refetch={refetch} />;

  return (
    <TableContainer sx={{ border: "2px solid lightgray" }}>
      <MuiTable
        sx={{
          "& td, & th": {
            border: "1px solid lightgray",
          },
        }}
      >
        <TableHead>{renderHeaders()}</TableHead>
        <TableBody>
          {isLoading
            ? renderSkeletonRows({ nRows: perPage })
            : renderRows({ items: items ?? [], isMobile })}
          <Pagination count={total_count ?? 0} />
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

function renderHeaders() {
  return (
    <TableRow>
      {columns.map((col) => (
        <TableCell key={col.key} colSpan={col.colSpan} sx={col.sx}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Typography>{col.label}</Typography>
            {col.sortKey && <SortIcon sort={col.sortKey} />}
          </Box>
        </TableCell>
      ))}
    </TableRow>
  );
}

function renderRows(props: { items: RepoSchema["items"]; isMobile: boolean }) {
  const { items, isMobile } = props;
  return (
    <>
      {items.map((item, index) => (
        <TableRow key={index} sx={{ height: "100px" }}>
          {columns.map((col) => (
            <TableCell key={col.key} colSpan={col.colSpan} sx={col.sx}>
              {col.render(item, isMobile)}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}

function renderSkeletonRows({ nRows }: { nRows: number }) {
  return Array.from({ length: nRows }).map((_, index) => (
    <TableRow key={index} sx={{ height: "100px" }}>
      {columns.map((col) => (
        <TableCell key={col.key} colSpan={col.colSpan} sx={col.sx}>
          <Box display="flex" justifyContent="center" alignItems="center">
            {col.skeleton}
          </Box>
        </TableCell>
      ))}
    </TableRow>
  ));
}
