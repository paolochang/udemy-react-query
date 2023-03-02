# 04. Infinite Scroll Diagram

## The Flow

1. Component mounts

   ```js
   // data property of useInfiniteScroll is undefined
   const { data } = useInfiniteScroll(...)
   ```

2. Fetch first page

   ```js
   /**
    * pageParams uses the default url value
    * useInfiniteScroll returns a data with data.page[0]
    */
   const { data } = useInfiniteScroll(( pageParams = defaultUrl ) => ...)
   ```

3. After the data back, React Query will run `getNextPageParam` to update `pageParam`

4. Check `hasNextPage` to update next page

   - `hasNextPage` == true

     - if `pageParam` is defined, that mean next page exists, go to `Step 5`

   - `hasNextPage` == false

     - Done!

5. `fetchNextPage` will run by user scrolls / clicks button

   - then go back to `Step 3`
