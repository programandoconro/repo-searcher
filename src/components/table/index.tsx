import "./index.css";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Table as MuiTable,
  Link,
  Skeleton,
  Alert,
  AlertTitle,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import { Pagination } from "../pagination";
import { useTable } from "./hooks";
import type { RepoSchema } from "../../types/repo-schema";
import { Collapsible } from "../collapsable";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import type { SearchParams, Sort } from "../../types";

export function Table() {
  const {
    items,
    total_count,
    perPage,
    isLoading,
    error,
    refetch,
    isMobile,
    onSortToggle,
    searchParams,
  } = useTable();
  if (error) return renderError({ refetch });

  return (
    <TableContainer
      sx={{
        border: "2px solid lightgray",
      }}
    >
      <MuiTable
        sx={{
          "& td, & th": {
            border: "1px solid lightgray",
          },
        }}
      >
        <TableHead>{renderHeaders({ onSortToggle, searchParams })}</TableHead>
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

function renderHeaders({
  searchParams,
  onSortToggle,
}: {
  searchParams: SearchParams;
  onSortToggle: ({ sort }: { sort: Sort }) => void;
}) {
  return (
    <>
      <TableRow>
        <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
          <Typography>Avatar</Typography>
        </TableCell>
        <TableCell>
          <Typography>Name</Typography>
        </TableCell>
        <TableCell colSpan={2}>
          <Typography>Description</Typography>
        </TableCell>
        <TableCell>
          <Typography>Stars</Typography>
          {renderSortIcon({ sort: "stars", onSortToggle, searchParams })}
        </TableCell>
        <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
          <Typography>Forks</Typography>
          {renderSortIcon({ sort: "forks", onSortToggle, searchParams })}
        </TableCell>
        <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
          <Typography>Updated</Typography>
          {renderSortIcon({ sort: "updated", onSortToggle, searchParams })}
        </TableCell>
      </TableRow>
    </>
  );
}

function renderRows(props: { items: RepoSchema["items"]; isMobile: boolean }) {
  const { items, isMobile } = props;
  return (
    <>
      {items.map((item, index) => {
        return (
          <TableRow key={index} sx={{ height: "100px" }}>
            <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
              <Box
                component="img"
                src={item.owner?.avatar_url}
                alt="Avatar"
                sx={{
                  width: {
                    xs: 30, // extra-small screens
                    sm: 40, // small screens
                    md: 50, // medium and up
                  },
                  borderRadius: "50%",
                }}
              />
            </TableCell>
            <TableCell>
              <Link target="_blank" rel="noopener" href={item.html_url}>
                <Typography>{isMobile ? item.name : item.full_name}</Typography>
              </Link>
            </TableCell>
            <TableCell colSpan={2}>
              <Collapsible text={item.description ?? ""} />
            </TableCell>
            <TableCell>
              <Typography>{item.stargazers_count}</Typography>
            </TableCell>
            <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
              <Typography>{item.forks_count}</Typography>
            </TableCell>
            <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
              <Typography>{item.updated_at.slice(0, 10)}</Typography>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
}

function renderSkeletonRows({ nRows }: { nRows: number }) {
  return Array.from({ length: nRows }).map((_, index) => (
    <TableRow key={index} sx={{ height: "100px" }}>
      <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Skeleton variant="circular" width={50} height={50} />
        </Box>
      </TableCell>
      <TableCell>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Skeleton width="80%" />
        </Box>
      </TableCell>
      <TableCell colSpan={2}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Skeleton width="90%" />
        </Box>
      </TableCell>
      <TableCell>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Skeleton width="50%" />
        </Box>
      </TableCell>
      <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Skeleton width="50%" />
        </Box>
      </TableCell>
      <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Skeleton width="70%" />
        </Box>
      </TableCell>
    </TableRow>
  ));
}

function renderError({ refetch }: { refetch: () => void }) {
  return (
    <Box my={4} sx={{ display: "block", margin: "auto" }}>
      <Alert severity="error" variant="outlined" sx={{ cursor: "pointer" }}>
        <AlertTitle>Error</AlertTitle>
        Something went wrong while loading the data.{" "}
        <Button size="small" onClick={refetch}>
          Retry
        </Button>
      </Alert>
    </Box>
  );
}

function renderSortIcon({
  sort,
  onSortToggle,
  searchParams,
}: {
  sort: Sort;
  searchParams: SearchParams;
  onSortToggle: ({ sort }: { sort: Sort }) => void;
}) {
  return (
    <IconButton onClick={() => onSortToggle({ sort })}>
      {sort === searchParams.sort && searchParams.order === "asc" ? (
        <ArrowUpward />
      ) : (
        <ArrowDownward />
      )}
    </IconButton>
  );
}
