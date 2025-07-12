import { IconButton, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

type ThemeButtonProps = {
  mode: "dark" | "light";
  toggleMode: () => void;
};

export function ThemeButton({ mode, toggleMode }: ThemeButtonProps) {
  return (
    <Tooltip title={`Switch to ${mode === "dark" ? "Light" : "Dark"} Mode`}>
      <IconButton color="inherit" onClick={toggleMode}>
        {mode === "dark" ? (
          <LightModeIcon
            sx={{ fontSize: { xs: 24, sm: 28, md: 32, lg: 36 } }}
          />
        ) : (
          <DarkModeIcon sx={{ fontSize: { xs: 24, sm: 28, md: 32, lg: 36 } }} />
        )}
      </IconButton>
    </Tooltip>
  );
}
