import { Octokit } from "@octokit/core";
import type { SearchParams } from "../types";

// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: import.meta.env.GITHUB_TOKEN,
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
