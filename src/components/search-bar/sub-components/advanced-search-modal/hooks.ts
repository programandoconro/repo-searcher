import { useContext, useState } from "react";
import { QueryContext } from "@/context/query/query-context";

type AdvancedSearchFields = {
  searchTerm: string;
  language: string;
  stars: string;
  user: string;
  topic: string;
  created: string;
  goodFirstIssues: string;
  helpWantedIssues: string;
};

const initialState: AdvancedSearchFields = {
  searchTerm: "",
  language: "",
  stars: "",
  user: "",
  topic: "",
  created: "",
  goodFirstIssues: "",
  helpWantedIssues: "",
};

export const useAdvanceSearchModal = ({
  closeModal,
}: {
  closeModal: () => void;
}) => {
  const { query: previousQuery, handleQueryChange } = useContext(QueryContext);
  const [fields, setFields] = useState<AdvancedSearchFields>(initialState);

  const setField = <K extends keyof AdvancedSearchFields>(
    key: K,
    value: AdvancedSearchFields[K]
  ) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const clearEntries = () => {
    setFields(initialState);
  };

  const onQueryBuild = (query: string) => {
    handleQueryChange(`${previousQuery} ${query}`.trim());
  };

  const handleBuildQuery = () => {
    const parts: string[] = [];

    if (fields.searchTerm) parts.push(fields.searchTerm);
    if (fields.language) parts.push(`language:${fields.language}`);
    if (fields.stars) parts.push(`stars:${fields.stars}`);
    if (fields.user) parts.push(`user:${fields.user}`);
    if (fields.topic) parts.push(`topic:${fields.topic}`);
    if (fields.created) parts.push(`created:${fields.created}`);
    if (fields.goodFirstIssues)
      parts.push(`good-first-issues:${fields.goodFirstIssues}`);
    if (fields.helpWantedIssues)
      parts.push(`help-wanted-issues:${fields.helpWantedIssues}`);

    const query = parts.join(" ");
    onQueryBuild(query);
    clearEntries();
    closeModal();
  };

  return {
    fields,
    setField,
    handleBuildQuery,
    clearEntries,
  };
};
