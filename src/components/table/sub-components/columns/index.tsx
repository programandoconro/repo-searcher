import {
  Box,
  Skeleton,
  Link,
  Typography,
  type SxProps,
  Tooltip,
} from "@mui/material";
import type { Item } from "../../../../types";
import { Collapsible } from "../collapsable";
import type { ReactNode } from "react";
import Star from "@mui/icons-material/Star";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type Column = {
  key: string;
  label: string | ReactNode;
  colSpan: number;
  sx?: SxProps;
  render: (item: Item, isMobile?: boolean) => ReactNode;
  skeleton: ReactNode;
};

export const columns: Column[] = [
  {
    key: "avatar",
    label: "Avatar",
    colSpan: 1,
    sx: { display: { xs: "none", sm: "table-cell" } },
    render: (item: Item) => (
      <Box
        component="img"
        src={item.owner?.avatar_url}
        alt="Avatar"
        sx={{
          width: { xs: 30, sm: 40, md: 50 },
          borderRadius: "50%",
        }}
      />
    ),
    skeleton: <Skeleton variant="circular" width={50} height={50} />,
  },
  {
    key: "repo",
    label: "Repo",
    colSpan: 1,
    render: (item: Item, isMobile?: boolean) => (
      <Link target="_blank" rel="noopener" href={item.html_url}>
        <Typography>
          {isMobile ? (
            <Tooltip title={item.name}>
              <OpenInNewIcon />
            </Tooltip>
          ) : (
            item.full_name
          )}
        </Typography>
      </Link>
    ),
    skeleton: <Skeleton width="80%" />,
  },
  {
    key: "description",
    label: "Description",
    colSpan: 2,
    render: (item: Item) => <Collapsible text={item.description ?? ""} />,
    skeleton: <Skeleton width="90%" />,
  },
  {
    key: "stars",
    label: (
      <Tooltip title="Number of Stars">
        <Star />
      </Tooltip>
    ),
    colSpan: 1,
    render: (item: Item) => <Typography>{item.stargazers_count}</Typography>,
    skeleton: <Skeleton width="50%" />,
  },
  {
    key: "forks",
    label: (
      <Tooltip title="Number of Forks">
        <ForkRightIcon />
      </Tooltip>
    ),
    colSpan: 1,
    sx: { display: { xs: "none", sm: "table-cell" } },
    render: (item: Item) => <Typography>{item.forks_count}</Typography>,
    skeleton: <Skeleton width="50%" />,
  },
  {
    key: "updated",
    label: "Updated",
    colSpan: 1,
    sx: { display: { xs: "none", sm: "table-cell" } },
    render: (item: Item) => (
      <Typography>{item.pushed_at?.slice(0, 10)}</Typography>
    ),
    skeleton: <Skeleton width="70%" />,
  },
];
