# 🧩 Repo Searcher

A responsive web application built with **React**, **Vite**, **MUI**, and **SWR** that allows users to search for GitHub repositories with powerful features like pagination, sorting, theming, and caching.

> 🔗 Live: [https://repo-searcher-mu.vercel.app/](https://repo-searcher-mu.vercel.app/)

---

## ✨ Features

- 🔍 Search GitHub repositories by keyword
- 📊 Paginated, sortable table of results
- ⬇️ Collapsible repo descriptions with fade effect
- 🔁 Client-side caching and shared state with **SWR**
- 🎨 Toggle between light/dark theme
- 📱 Fully responsive (mobile-friendly)
- 🔃 GitHub sort options: `stars`, `forks`, `help-wanted-issues`, `updated`
- 🔼↕️ Ascending/descending sort toggle via dropdown menu
- 🧩 Modular component structure
- 🚫 Handles GitHub's 1000-item API limit

---

## 🧩 Tech Stack

- **React** (via **Vite**)
- **TypeScript**
- **MUI** – UI components and theming ([mui.com](https://mui.com/))
- **SWR** – data fetching and caching ([swr.vercel.app](https://swr.vercel.app/))
- **GitHub REST API** – for repository data ([GitHub Docs](https://docs.github.com/en/rest/search/search))

---

## 📁 Project Structure

src/
├── components/
│ ├── app/ # App shell, theme init
│ ├── header/ # App title and theme toggle
│ ├── search-bar/ # Search field & sorting
│ │ └── sub-components/
│ │ └── sort-menu/ # Sorting UI and toggle
│ ├── table/ # Main result table
│ │ ├── sub-components/
│ │ │ ├── collapsible/ # Expandable repo description
│ │ │ ├── columns/ # Column render logic
│ │ │ ├── pagination/ # Pagination controls
│ │ │ ├── error/ # Error messages
│ │ │ └── row-wrapper/ # Row with dynamic sizing
│ └── theme-button/ # Light/Dark mode icon
│
├── context/
│ └── theme/ # Theme context and provider
│
├── hooks/ # Shared custom hooks
│ ├── use-responsive.ts
│ ├── use-search-params.ts
│ └── use-theme.ts
│
├── types/ # TypeScript interfaces and models
├── utils/ # Helpers (e.g., GitHub request, formatters)
├── main.tsx # App entry point
├── vite-env.d.ts

## 🔧 Setup & Usage

### 📦 Install

```bash
npm install
```

Start the Dev Server

```bash
npm run dev
```

🔐 Optional: GitHub Token
Avoid hitting GitHub’s unauthenticated rate limit by setting a personal access token:

```bash
# .env
VITE_GITHUB_TOKEN=your_github_token
```
