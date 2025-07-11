import { useQuery } from "./hooks";

export function Query() {
  const { queryInput, handleQueryInput, handleClick } = useQuery();
  return (
    <>
      <input value={queryInput} onChange={handleQueryInput} />
      <button onClick={handleClick}>Search</button>
    </>
  );
}
