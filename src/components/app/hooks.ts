import { useSearchParams } from "../../hooks/use-search-params";
import { useStyles } from "../../hooks/use-styles";

export const useApp = () => {
  const { query } = useSearchParams().searchParams;
  const isQueryEmpty = query.trim() === "";
  const { theme, mode, toggleMode } = useStyles();

  return { theme, toggleMode, mode, isQueryEmpty };
};
