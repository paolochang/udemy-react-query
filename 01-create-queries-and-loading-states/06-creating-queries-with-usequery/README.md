# Creating Queries with useQuery

```js
import { Posts } from "./Posts";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

// Define query client
const queryClient = new QueryClient();

function App() {
  return (
    // provide React Query client to App
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Blog Posts</h1>
        <Posts />
      </div>
    </QueryClientProvider>
  );
}

export default App;
```

```js
import { useState } from "react";
import { useQuery } from "react-query";
import { PostDetail } from "./PostDetail";

const maxPostPage = 10;

async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0"
  );
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  // get data from useQuery
  // 함수는 async function을 불러와야 한다.
  const { data } = useQuery("posts", fetchPosts);

  return (
    <>
      <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button disabled onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
```

> <pre>
> Uncaught TypeError: Cannot read properties of undefined (reading 'map')
>     at Posts (Posts.jsx:23:1)
> </pre>

`fetchPosts`는 동기 함수로 data를 받기 전까지 `undefined`이다. 제대로된 오류 핸들링에 대해서는 나중에 자세히 알아보도록 하고 지금은 비어있는 `<div>` block으로 오류를 해결한다.

```js
if (!data) return <div />;
```

## Reference

- [GitHub: commits on blog-em project](https://github.com/paolochang/udemy-react-query/pull/1/commits/d61cfa24a667cf27a55d614852f60c6edc5645e2)
