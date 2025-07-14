import { useSearchParams } from "../../hooks/use-search-params";
import { useAppTheme } from "../../hooks/use-theme";

export const useApp = () => {
  const { query } = useSearchParams().searchParams;
  const isQueryEmpty = query.trim() === "";
  const { theme } = useAppTheme();

  return { theme, isQueryEmpty };
};
