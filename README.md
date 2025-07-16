# 🕵 Repo Searcher

A responsive web application built with **[React](https://react.dev/)**, **[Vite](https://vitejs.dev/)**, **[MUI](https://mui.com/)**, and **[SWR](https://swr.vercel.app/)** that allows users to search GitHub repositories using keywords, advanced filters, and query qualifiers. Features include pagination, sorting, global state management, theming, and responsive design.

> 🔗 Live (deployed on Vercel): [https://repo-searcher-mu.vercel.app/](https://repo-searcher-mu.vercel.app/)

---

## ✨ Features

- 🔍 **Keyword Search**: Search GitHub repositories by name, description, or topic
- 🧠 **Advanced Search Modal**: Add filters for:
  - `language`, `stars`, `user`, `topic`, `created`
  - `good-first-issues`, `help-wanted-issues`
- ✍️ **Query Qualifier Support**: Type [GitHub search qualifiers](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories) directly into the search bar (e.g. `language:typescript stars:>100 topic:cli`)
- 🔢 **Pagination**: Browse results using GitHub's paginated API
- 🎛️ **Sort & Order Menu**: Sort results by `stars`, `forks`, `help-wanted-issues`, or `updated`, and toggle ascending/descending order
- ⬇️ **Expandable Descriptions**: Collapsible sections reveal full repository descriptions
- 🔁 **Shared State with [SWR](https://swr.vercel.app/)**: Used for both data fetching, caching results _and_ global UI state management
- 🎨 **Dark/Light Mode**: Built with [MUI](https://mui.com/)'s theme system
- 📱 **Mobile-Friendly UI**: Responsive layout for all screen sizes
- 🧩 **Modular Architecture**: Well-structured and scalable component system
- 🚫 **GitHub API Limit Handling**: Works within the 1,000 result cap of GitHub’s API

---

## 🛠 Tech Stack

- [**React**](https://react.dev/)
- [**Vite**](https://vitejs.dev/)
- [**TypeScript**](https://www.typescriptlang.org/)
- [**MUI (Material UI)**](https://mui.com/)
- [**SWR**](https://swr.vercel.app/)
- [**GitHub REST API**](https://docs.github.com/en/rest/search/search)

---

```bash
npm install
```

▶️ Run the Dev Server

```bash
npm run dev
```

🔐 Optional: GitHub Token
Avoid hitting GitHub’s unauthenticated API rate limits by setting a personal access token:

```bash
# .env
VITE_GITHUB_TOKEN=your_github_token
```
