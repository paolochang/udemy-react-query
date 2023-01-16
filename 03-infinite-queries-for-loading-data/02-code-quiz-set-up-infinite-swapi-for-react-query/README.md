# 02. Code Quiz! Set up Infinite SWAPI for React Query

- Clone, fork or download https://github.com/bonnie/udemy-REACT-QUERY

  - cd base-infinite-swapi

- IMPORTANT! npm install --legacy-peer-deps

  - react-infinite-scroller doesn't technicall support React 17

## Quiz Tasks

- Install React Query

  - https://react-query.tanstack.com/installation

- Create query client and add provider to App.js

  - https://react-query.tanstack.com/quick-start

- Add dev tools to App.js

  - https://react-query.tanstack.com/devtools

## Quiz Code Practise

### Install

```bash
$ npm install react-query
```

### `App.js`

```js
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { InfinitePeople } from "./people/InfinitePeople";
import { InfiniteSpecies } from "./species/InfiniteSpecies";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Infinite SWAPI</h1>
        <InfinitePeople />
        {/* <InfiniteSpecies /> */}
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
}

export default App;
```
