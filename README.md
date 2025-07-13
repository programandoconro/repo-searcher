# Repo Searcher

A responsive web application built with **React**, **Vite**, **MUI**, and **SWR** that allows users to search for GitHub repositories with advanced features like pagination, sorting, theming, and caching.

> 🔗 Live at: [https://repo-searcher-mu.vercel.app/](https://repo-searcher-mu.vercel.app/)

## ✨ Features

- 🔍 Search GitHub repositories by keyword
- 📊 Paginated and sortable results table
- 🎨 Light/Dark mode toggle
- 📱 Responsive design (mobile-friendly)
- 🧠 Caching and shared state via SWR
- ⬇️ Collapsible descriptions with gradient fade
- 🚫 Result limit handling (GitHub's 1000 item cap)

## 🧩 Tech Stack

- **React** with **Vite**
- **TypeScript**
- **MUI (Material UI)** for design system and components https://mui.com/
- **SWR** for data fetching and client-side state caching https://swr.vercel.app/
- **GitHub Search API** for fetching repositories https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-repositories

## 📁 Project Structure

src/
├── components/ # UI components grouped by feature
│ ├── app/ # App container and theme setup
│ ├── header/ # Header title and theme button
│ ├── search-bar/ # Search input field and logic
│ ├── table/ # Main results table
│ │ └── sub-components/
│ │ ├── collapsable/ # Expanding repo description
│ │ ├── columns/ # Table column rendering
│ │ ├── error/ # Error display
│ │ ├── pagination/ # Pagination controls
│ │ └── sort-icon/ # Sorting icons with tooltips
│ └── theme-button/ # Theme toggle icon
├── hooks/ # Custom hooks (e.g., useSearchParams)
├── types/ # TypeScript type declarations
├── utils/ # Utility functions (e.g., API call)

## 🧪 How to Use

### 📦 Install Dependencies

```bash
npm install
```

▶️ Run Locally

```
npm run dev
```

🚀 Build for Production

```
npm run build
```

🛠 Environment Variables
This project uses the GitHub Search API which does not require an API key for basic usage.
To avoid rate limits, you can optionally use a personal GitHub token:

```
VITE_GITHUB_TOKEN=your_token_here
```

✅ Todos
Add error and empty state visuals
Add unit tests
Add advanced filters (language, stars, etc.)

📄 License
MIT
