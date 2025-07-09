import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Table as MuiTable,
  Link,
} from "@mui/material";
import "./index.css";
import type { RepoSchema } from "../../model/repo-schema";

type TableProps = {
  items?: RepoSchema["items"];
  error: boolean;
  isLoading: boolean;
};

export function Table({ items, error, isLoading }: TableProps) {
  if (error) return <div>There was an error</div>;
  if (!items) return <div>No items</div>;
  if (isLoading) return "Spinner";
  return (
    <TableContainer>
      <MuiTable>
        <TableHead>
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
              <Typography>Language</Typography>
            </TableCell>
            <TableCell>
              <Typography>Stars</Typography>
            </TableCell>
            <TableCell>
              <Typography>Last Updated</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
                  <Typography>{item.description}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{item.language}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{item.stargazers_count}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{item.updated_at}</Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
