import { useAppTheme } from "../../hooks/use-theme";

export const useThemeButton = () => {
  const { mode, toggleMode } = useAppTheme();

  return {
    mode,
    toggleMode,
  };
};
