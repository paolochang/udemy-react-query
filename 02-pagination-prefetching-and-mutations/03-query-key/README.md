# Query Keys

## Why don't comments refresh

- Every query uses the same key `comments`

- Data for queries with known keys only refetched upon trigger

- Example triggers:

  - component remount
  - window refocus
  - running refetch function
  - automated refetch
  - query invalidation after a mutation

## Solution

- Option 1: remove programmatically for every new title **(BAD)**

  - Not easy, not what we want
  - No reason to remove data from the cache
  - We're not even performing the same query

- Option 2: Query includes post ID **(BAD)**

  - Cache on a per-query basis
  - don't share cache for any "comments" query regardless of post id

- Option 3: Passing array for the query key, not just a string **(RECOMMENDED)**

  - **label the query for each post separately**

  ```js
  const { data } = useQuery(["comments", post.id], () =>
    fetchComments(post.id)
  );
  ```

  - Treat the query key as a dependency array

    - When key changes, create a new query

  - Query function values should be part of the key

## Reference

- [GitHub: code exercise](https://github.com/paolochang/udemy-react-query/commit/61e24043509fbafca25b763edee5823af4574084)
