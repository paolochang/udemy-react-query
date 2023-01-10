# Handling Loading and Error States

```js
const {
   data,
   (...)
   isError,
   isLoading,
   (...)
 } = useQuery(queryKey, queryFn?)
```

DevTools의 `Network` 탭에서, 네트워크 속도를 `Slow 3G`로 설정하고 `<h3>Loading...</h3>`가 출력되는지 확인한다.

## isFetching vs. isLoading

- `isFetching`은 비동기 쿼리가 현재 진행중임을 의미한다.
  the `async query function` hasn't yet resolved
  따라서 fetching이 완료되지 않았다는 의미한다

- `isLoading`는 쿼리 함수가 현재 진행중이며 캐시화 된 데이터 또한 존재하지 않음을 의미한다. 다시 말해 이 쿼리를 만든적이 없다는 의미이다. (데이터를 가져오는 중이고, 표시할 캐시 데이터도 없다)
  no cached data, plus isFetching

## Code Example

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

  // replace with useQuery
  const { data, isError, error, isLoading } = useQuery("posts", fetchPosts);

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

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

## Reference

- [React Query v3 - useQuery](https://react-query-v3.tanstack.com/reference/useQuery)
- [GitHub: commits for handling laoding and error state](https://github.com/paolochang/udemy-react-query/commit/f6529b735bb519adddb5706015afbcc14d2db538)
