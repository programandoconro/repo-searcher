import { useState, type ReactNode } from "react";
import { QueryContext } from "./query-context";

export function QueryProviderContext({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");

  const handleQueryChange = (s: string) => {
    setQuery(s);
  };

  return (
    <QueryContext.Provider value={{ query, handleQueryChange }}>
      {children}
    </QueryContext.Provider>
  );
}
