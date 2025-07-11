import "./index.css";

import { Query } from "../query";
import { Table } from "../table";

function App() {
  return (
    <div>
      <h1>Repo Searcher</h1>
      <Query />
      <Table />
    </div>
  );
}

export default App;
