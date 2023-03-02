# 07. useInfiniteQuery Fetching and Error states

## Error

```
InfinitePeople.jsx:22 Uncaught TypeError: Cannot read properties of undefined (reading 'pages')
```

## Solution

1. change `data.pages.map()` to `data?.pages.map()`

   ```js
   <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
     /** add ? after data */
     {data?.pages.map((pageData) =>
       pageData.results.map((person) => (
         <Person key={person.name} {...person} />
       ))
     )}
   </InfiniteScroll>
   ```

2. add `isLoading` and `isError` to handle loading and error state

   ```js
   if (isLoading) {
     return <div className="loading">Loading...</div>;
   }

   if (isError) {
     return <div>Error {error.toString()}</div>;
   }
   ```

3. add `isFetching` to notify fetching process while infinite scrolling

   ```js
   return (
     <>
       {isFetching && <div className="loading">Loading...</div>}
       <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
         {data?.pages.map((pageData) =>
           pageData.results.map((person) => (
             <Person key={person.name} {...person} />
           ))
         )}
       </InfiniteScroll>
     </>
   );
   ```
