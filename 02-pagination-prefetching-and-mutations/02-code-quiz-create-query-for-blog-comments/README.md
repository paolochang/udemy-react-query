# Code Quiz! Create Query for Blog Comments

- `/src/PostDetail.jsx`

- Run useQuery

- Account for error, loading and results

- Be sure to choose a different query key (not `posts`)

  - React Query uses the key for cache / stale time

- query function needs `postId` parameter

  ```js
  const { data } = useQuery("key_here", () => fetchComments(post.id));
  ```

- Warning: comments won't refresh when you click on different posts
