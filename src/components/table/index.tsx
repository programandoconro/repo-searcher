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
} from "@mui/material";
import { Pagination } from "../pagination";
import { useTable } from "./hooks";
import type { RepoSchema } from "../../types/repo-schema";
import { Collapsible } from "../collapsable";

export function Table() {
  const { items, total_count, perPage, isLoading, error, refetch } = useTable();
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
        <TableHead>{renderHeaders()}</TableHead>
        <TableBody>
          {isLoading
            ? renderSkeletonRows({ nRows: perPage })
            : renderRows(items ?? [])}
          <Pagination count={total_count ?? 0} />
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

function renderHeaders() {
  return (
    <>
      <TableRow>
        <TableCell>
          <Typography>Avatar</Typography>
        </TableCell>
        <TableCell>
          <Typography>Repo Name</Typography>
        </TableCell>
        <TableCell>
          <Typography>Description</Typography>
        </TableCell>
        <TableCell>
          <Typography>Stars</Typography>
        </TableCell>
        <TableCell>
          <Typography>Forks</Typography>
        </TableCell>
        <TableCell>
          <Typography>Last Updated</Typography>
        </TableCell>
      </TableRow>
    </>
  );
}

function renderRows(items: RepoSchema["items"]) {
  return (
    <>
      {items.map((item, index) => {
        return (
          <TableRow key={index} sx={{ height: "100px" }}>
            <TableCell>
              <img src={item.owner?.avatar_url} width="50px" />
            </TableCell>
            <TableCell>
              <Link target="_blank" rel="noopener" href={item.html_url}>
                <Typography>{item.full_name}</Typography>
              </Link>
            </TableCell>
            <TableCell>
              <Collapsible text={item.description ?? ""} />
            </TableCell>
            <TableCell>
              <Typography>{item.stargazers_count}</Typography>
            </TableCell>
            <TableCell>
              <Typography>{item.forks_count}</Typography>
            </TableCell>
            <TableCell>
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
      <TableCell>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Skeleton variant="circular" width={50} height={50} />
        </Box>
      </TableCell>
      <TableCell>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Skeleton width="80%" />
        </Box>
      </TableCell>
      <TableCell>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Skeleton width="90%" />
        </Box>
      </TableCell>
      <TableCell>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Skeleton width="50%" />
        </Box>
      </TableCell>
      <TableCell>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Skeleton width="50%" />
        </Box>
      </TableCell>
      <TableCell>
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
