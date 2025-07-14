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

import { Pagination } from "./sub-components/pagination";
import { Error } from "./sub-components/error";
import { columns } from "./sub-components/columns";

import { useTable } from "./hooks";
import { TableRowWrapper } from "./sub-components/row-wrapper.tsx";

import type { Item } from "@/types/index.ts";

export function Table() {
  const { items, count, perPage, isLoading, error, refetch, isMobile } =
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
          <Pagination count={count} />
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
              flexWrap: "wrap",
              wordBreak: "break-all",
            }}
          >
            <Typography>{col.label}</Typography>
          </Box>
        </TableCell>
      ))}
    </TableRow>
  );
}
function renderRows({ items, isMobile }: { items: Item[]; isMobile: boolean }) {
  return (
    <>
      {items.map((item, index) => (
        <TableRowWrapper key={index} item={item} isMobile={isMobile} />
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
