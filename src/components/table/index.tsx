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
  const { items, total_count, isLoading, error, refetch } = useTable();
  if (error) return renderError({ refetch });

  return (
    <TableContainer>
      <MuiTable>
        <TableHead>{renderHeaders()}</TableHead>
        <TableBody>
          {isLoading ? renderSkeletonRows() : renderRows(items ?? [])}
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
          <TableRow key={index}>
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
              <Typography>{item.updated_at}</Typography>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
}
function renderSkeletonRows() {
  return Array.from({ length: 5 }).map((_, index) => (
    <TableRow key={index} sx={{ height: "100px" }}>
      <TableCell>
        <Skeleton variant="circular" width={50} height={50} />
      </TableCell>
      <TableCell>
        <Skeleton width="80%" />
      </TableCell>
      <TableCell>
        <Skeleton width="90%" />
      </TableCell>
      <TableCell>
        <Skeleton width="50%" />
      </TableCell>
      <TableCell>
        <Skeleton width="50%" />
      </TableCell>
      <TableCell>
        <Skeleton width="70%" />
      </TableCell>
    </TableRow>
  ));
}

function renderError({ refetch }: { refetch: () => void }) {
  return (
    <Box my={4}>
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
