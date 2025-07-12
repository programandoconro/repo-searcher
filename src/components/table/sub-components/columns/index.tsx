import { Box, Skeleton, Link, Typography } from "@mui/material";
import type { Column, Item } from "../../../../types";
import { Collapsible } from "../../../collapsable";

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
    key: "name",
    label: "Name",
    colSpan: 1,
    render: (item: Item, isMobile?: boolean) => (
      <Link target="_blank" rel="noopener" href={item.html_url}>
        <Typography>{isMobile ? item.name : item.full_name}</Typography>
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
    label: "Stars",
    colSpan: 1,
    render: (item: Item) => <Typography>{item.stargazers_count}</Typography>,
    skeleton: <Skeleton width="50%" />,
    sortKey: "stars",
  },
  {
    key: "forks",
    label: "Forks",
    colSpan: 1,
    sx: { display: { xs: "none", sm: "table-cell" } },
    render: (item: Item) => <Typography>{item.forks_count}</Typography>,
    skeleton: <Skeleton width="50%" />,
    sortKey: "forks",
  },
  {
    key: "updated",
    label: "Updated",
    colSpan: 1,
    sx: { display: { xs: "none", sm: "table-cell" } },
    render: (item: Item) => (
      <Typography>{item.updated_at?.slice(0, 10)}</Typography>
    ),
    skeleton: <Skeleton width="70%" />,
    sortKey: "updated",
  },
];
