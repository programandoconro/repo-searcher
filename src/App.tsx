//import { useState } from "react";
import { useState } from "react";
import useSWR from "swr";
import { Table } from "./components/table";
import { type SearchParams, requestRepositories } from "./utils/requests";
import "./App.css";
import { CssBaseline } from "@mui/material";

function App() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    query: "",
  });
  const [queryInput, setQueryInput] = useState("");

  const { data, error, isLoading } = useSWR(searchParams, () =>
    requestRepositories(searchParams)
  );

  const handleSearchParamsChange = <K extends keyof SearchParams>(
    field: K,
    value: SearchParams[K]
  ) => {
    setSearchParams((prev) => ({ ...prev, [field]: value }));
  };

  const handleQueryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryInput(e.target.value);
  };

  const handleClick = () => {
    handleSearchParamsChange("query", queryInput);
  };
  return (
    <CssBaseline>
      <h1>Repo Searcher</h1>
      <input value={queryInput} onChange={handleQueryInput} />
      <button onClick={handleClick}>Search</button>
      <Table items={data?.data.items} isLoading={isLoading} error={error} />
    </CssBaseline>
  );
}

export default App;
