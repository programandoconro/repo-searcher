import { Octokit } from "@octokit/core";

// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: import.meta.env.GITHUB_TOKEN,
});

export type SearchParams = {
  query: string;
  perPage: number;
  order?: Order;
  page: number;
  sort?: Sort;
};
type Sort = "stars" | "forks" | "help-wanted-issues" | "updated";
type Order = "desc" | "asc";

export async function requestRepositories({
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
