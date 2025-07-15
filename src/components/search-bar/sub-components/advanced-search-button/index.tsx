import TuneIcon from "@mui/icons-material/Tune";
import { IconButton, Tooltip } from "@mui/material";

export function AdvancedSearchButton({ onClick }: { onClick: () => void }) {
  return (
    <Tooltip title="Advanced Search">
      <IconButton
        onClick={(e) => {
          //To prevent having focus on hidden element
          e.currentTarget.blur();
          onClick();
        }}
      >
        <TuneIcon />
      </IconButton>
    </Tooltip>
  );
}
