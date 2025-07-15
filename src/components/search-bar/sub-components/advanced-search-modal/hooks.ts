import { QueryContext } from "@/context/query/query-context";
import { useContext, useState } from "react";

export const useAdvanceSearchModal = ({
  closeModal,
}: {
  closeModal: () => void;
}) => {
  const { query: previousQuery, handleQueryChange } = useContext(QueryContext);

  const onQueryBuild = (query: string) => {
    handleQueryChange(previousQuery + " " + query);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("");
  const [stars, setStars] = useState("");
  const [user, setUser] = useState("");
  const [topic, setTopic] = useState("");
  const [created, setCreated] = useState("");
  const [goodFirstIssues, setGoodFirstIssues] = useState("");
  const [helpWantedIssues, setHelpWantedIssues] = useState("");

  const clearEntries = () => {
    setSearchTerm("");
    setLanguage("");
    setStars("");
    setUser("");
    setTopic("");
    setCreated("");
    setGoodFirstIssues("");
    setHelpWantedIssues("");
  };

  const handleBuildQuery = () => {
    const parts: string[] = [];

    if (searchTerm) parts.push(searchTerm);
    if (language) parts.push(`language:${language}`);
    if (stars) parts.push(`stars:${stars}`);
    if (user) parts.push(`user:${user}`);
    if (topic) parts.push(`topic:${topic}`);
    if (created) parts.push(`created:${created}`);
    if (goodFirstIssues) parts.push(`good-first-issues:>${goodFirstIssues}`);
    if (helpWantedIssues) parts.push(`help-wanted-issues:>${helpWantedIssues}`);

    const query = parts.join(" ");
    onQueryBuild(query);
    clearEntries();
    closeModal();
  };

  return {
    onQueryBuild,
    searchTerm,
    setSearchTerm,
    language,
    setLanguage,
    stars,
    setStars,
    user,
    setUser,
    topic,
    setTopic,
    created,
    setCreated,
    goodFirstIssues,
    setGoodFirstIssues,
    helpWantedIssues,
    setHelpWantedIssues,
    handleBuildQuery,
    clearEntries,
  };
};
