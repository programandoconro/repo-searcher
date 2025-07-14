import type { Item } from "../../../../types";
import { columns } from "../columns";
import { TableCell, TableRow } from "@mui/material";
import { useRowWrapper } from "./hooks";

/*
This component is used to render a single table row with dynamic content
based on the provided columns definition. It measures the height of the 
repo name cell (`repo`) using a ref and passes that height to the 
description cell (`description`) to ensure visual alignment or height-dependent logic.
*/
export function TableRowWrapper({
  item,
  isMobile,
}: {
  item: Item;
  isMobile: boolean;
}) {
  const { repoNameRef, repoNameHeight } = useRowWrapper();

  const repoColumn = columns.find((c) => c.key === "repo");
  const descriptionColumn = columns.find((c) => c.key === "description");

  const renderOverrides: Record<string, () => React.ReactNode> = {
    repo: () =>
      repoColumn ? (
        <div ref={repoNameRef}>{repoColumn.render(item, isMobile)}</div>
      ) : null,
    description: () =>
      descriptionColumn
        ? descriptionColumn.render(item, isMobile, repoNameHeight)
        : null,
  };

  return (
    <TableRow>
      {columns.map((col) => {
        const content =
          renderOverrides[col.key]?.() ?? col.render(item, isMobile);
        return (
          <TableCell key={col.key} colSpan={col.colSpan} sx={col.sx}>
            {content}
          </TableCell>
        );
      })}
    </TableRow>
  );
}
