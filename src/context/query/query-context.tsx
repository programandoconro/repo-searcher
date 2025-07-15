import { createContext } from "react";

export type QueryContextValue = {
  query: string;
  handleQueryChange: (q: string) => void;
};

export const QueryContext = createContext<QueryContextValue>({
  query: "",
  handleQueryChange: (_) => _,
});
