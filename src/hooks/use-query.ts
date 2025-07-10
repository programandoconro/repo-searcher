import { useState } from "react";
import { useParams } from "./use-params";

export const useQuery = () => {
  const [queryInput, setQueryInput] = useState("");
  const { handleSearchParamsChange } = useParams();
  const handleQueryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryInput(e.target.value);
  };
  const handleClick = () => {
    handleSearchParamsChange("query", queryInput);
  };

  return {
    queryInput,
    handleQueryInput,
    handleClick,
  };
};
