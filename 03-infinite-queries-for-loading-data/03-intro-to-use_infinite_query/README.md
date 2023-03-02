# 03. Intro to useInfiniteQuery

## Shape of `useInfiniteQuery` Data

- Shape of data different than `useQuery`

- Object with two properties

  - `pages`: array of object, Every query has its own element in the `pages` array

  - `pageParams`: tracks the keys of queries that have been retrieved

    - rarely used, won't use here

## `useInfiniteQuery` Syntax

- `pageParams` is a parameter passed to the query function

  ```js
  useInfiniteQuery('sw-people', ({pageParam = {defaultUrl}} => fetchUrl(pageParam)))
  ```

  - current value of pageParam is maintained by React Query

- `useInfiniteQuery` options

  - `getNextPageParam`: (`lastPage`, `allPages`)

    - Updates `pageParam`
    - Might use all of the pages of data (`allPages`)
    - we will use just the `lastPage` of data (specifically the `next` property)

      ```json
      {
        "count": 37,
        "next" : "http://swapi.dev/api/species/?page=2",
        "previous": null,
        "results: [ ... ]
      }
      ```

      next query is returned as part of the data

## `useInfiniteQuery` Return Object Properties

- `fetchNextPage`: function to call when the user needs more data

- `hasNextPage`: Based on return value of `getNextPageParams`

  - If `undefined`, on more data

- `isFetchingNextPage`: For displaying a loading spinner

  - We'll see an example of when it's useful to distinguish between `isFetching` and `isFetchingNextPage`
