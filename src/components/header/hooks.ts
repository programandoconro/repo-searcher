import { useStyles } from "../../hooks/use-styles";

export const useHeader = () => {
  const { mode, toggleMode } = useStyles();

  return {
    mode,
    toggleMode,
  };
};
