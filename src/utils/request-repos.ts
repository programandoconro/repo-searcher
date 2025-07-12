import { Octokit } from "@octokit/core";
import type { SearchParams } from "../types";

const auth = import.meta.env.VITE_GITHUB_TOKEN;
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth,
});

export async function requestRepos({
  query,
  perPage,
  page,
  sort,
  order,
}: SearchParams) {
  try {
    return await octokit.request("GET /search/repositories", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
      q: query,
      per_page: perPage,
      page,
      sort,
      order,
    });
  } catch (e: unknown) {
    throw `There was an error fetching search Repositories: ${e}`;
  }
}
