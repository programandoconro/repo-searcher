import { Container, IconButton, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

type ThemeButtonProps = {
  mode: "dark" | "light";
  toggleMode: () => void;
};

export function ThemeButton({ mode, toggleMode }: ThemeButtonProps) {
  return (
    <Container sx={{ position: "relative" }}>
      <Tooltip
        title={`Switch to ${mode === "dark" ? "Light" : "Dark"} Mode`}
        sx={{ position: "absolute", top: "10px", right: "10px" }}
      >
        <IconButton color="inherit" onClick={toggleMode}>
          {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Tooltip>
    </Container>
  );
}
