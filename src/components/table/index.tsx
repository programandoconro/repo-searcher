import { useEffect, useState } from "react";
import { requestRepositories, type SearchParams } from "../../utils/requests";
import useSWR from "swr";

export function Table() {
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

  useEffect(() => {
    const handler = setTimeout(() => {
      handleSearchParamsChange("query", queryInput);
    }, 500);
    return () => clearTimeout(handler);
  }, [queryInput]);

  return (
    <div>
      <input onChange={handleQueryInput} />
      <table>
        <th>
          <tr>url</tr>
        </th>
        <tr>
          {error && "There was an error"}
          {isLoading && "Loading ..."}
        </tr>

        {data?.data.items.map((item, index) => {
          return <tr key={index}>{item.url}</tr>;
        })}
      </table>
    </div>
  );
}
