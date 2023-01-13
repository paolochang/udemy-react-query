# React Query Dev Tools

개발자 도구는 개발중인 모든 쿼리의 상태를 표시해준다.

- `query key`로 쿼리를 보여준다.
  - status: `active`(활성), `inactive`(비활성), `stale`(만료)
  - last updated timestamp
- Data 탐색기
- Query 탐색기

## Add React Query DevTools

```js
import { Posts } from "./Posts";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Blog Posts</h1>
        <Posts />
      </div>
      {/* React Query Devtools을 이곳에 삽입한다 */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
```

## Reference

- [React Query Devtools](https://react-query-v3.tanstack.com/devtools)
