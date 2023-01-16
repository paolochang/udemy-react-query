# Summary: React Query Basics

- Install `package`, create `QueryClient`, and add `QueryProvider`

- `useQuery` for data

  - return object also include `isLoading` / `isFetching` and `error`
    `isLoading`, `isFetching`, `error`등으로 특정 쿼리의 상태를 사용자에게 알려줄 수 있다.

- `staleTime` for whether or not to re-fetch (on trigger)
  `staleTime`: 데이터가 사용 가능한 상태로 유지되는 시간으로 클라이언트에 보여주는 데이터가 서버의 데이터와 비교해서 여전히 유효한지 기준이 되는 시간

- `cacheTime` for how long to hold on to data after inactivity
  `cacheTime`: 데이터가 비활성화된 이후 남아있는 시간으로 쿼리를 다시 실행 시켰을때 캐시 데이터가 존재하면 서버에서 데이터가 최신 상태인지 확인하는 동안 캐시 데이터를 사용하여 클라이언트에 보여준다. (서버에서 받은 데이터가 캐시 데이터와 다른경우 새로운 데이터를 보여준다)

- `query keys` as dependency arrays

  `query key`가 변경되었을 때 uesQuery hook이 쿼리를 반복하는데 `blog-em Ipsum`에서 `query key`를 `posts`와 `comments`, single string으로 정의했을 경우 페이지를 이동했을때 post가 바뀌지 않는 오류, 다른 포스트를 열어도 항상 같은 comments가 표시되는 오류가 발생한다.

  query key를 `['posts', currentPage]`와 `['comments', post.id]`, array로 정의했을 경우 위의 오류를 해결 할 수 있다.

- `pagination` and `pre-fetching`

- `useMutation` for server side-effects will be introduced in `Day Spa` app
