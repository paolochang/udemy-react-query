# Intro to Mutations

- Mutation: making a network call that changes data on the server

  Example: Create, delete or edit a post

  - `jsonplaceholder` API doesn't change server, so we only go through the mechanics of making the change

- Day Spa app will demonstrate showing changes to user

  - Optimistic updates (assume change will happen)

  - Update React Query cache with data returned from the server

  - Trigger refetch of relevant data (invalidation 무효화)

## `useMutation`

- Similar to `useQuery`, but:

  - returns `mutate` function

  - doesn't need query key

  - `isLoading` but no `isFetching`

  - by default, no retries (but, configurable)

  - [see the document](https://react-query.tanstack.com/guides/mutations)
