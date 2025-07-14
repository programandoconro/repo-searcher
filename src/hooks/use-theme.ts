import { useContext } from "react";
import { ThemeContext } from "../context/theme/theme-context";

export const useAppTheme = () => {
  const { mode, toggleMode, theme } = useContext(ThemeContext) || {
    theme: "dark",
    mode: "dark",
    toggleMode: () => undefined,
  };

  return { mode, toggleMode, theme };
};
