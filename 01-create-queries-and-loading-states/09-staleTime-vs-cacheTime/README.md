# staleTime vs. cacheTime

- data fetching이 끝나면 `stale` state로 바로 바뀌게된다.

## Stale Data

- `Data Refetching`은 만료된 데이터에서만 실행이 가능하다.
  예) `component remount`, `window refocus` 등이 있다.

- `staleTime`은 데이터를 허용하는 '최대 나이'라고 할 수 있다.
  또는
  데이터가 만료됐다고 판단하기 까지 허용하는 시간을 `staleTime`이라고 할 수 있다.

## staleTime vs. cacheTime

- `staleTime` is for re-fetching
  `staleTime`은 `refetching`을 하기위해 존재한다.
- Cache is for data that might be re-used later
  `Cache`는 나중에 다시 사용할 수 있는 데이터이다.

  - query goes into **"cold storage"** if there's no active `useQuery`
  - cache data expires after `cacheTime` (default: five minutes)
    how long it's been since the last active `useQuery`
    특정 `query key` 대한 `active` state이 아닌 쿼리는 **"cold storage"**로 이동하는데 `cacheTime` (default: 5 minutes)이 지나면 캐시의 데이터가 만료된다

  `cacheTime`이 관찰하는 시간의 양은 특정 `query key`에 대한 `useQuery`가 `active` state이 된 후 경과한 시간이다.

  - After the cache expires, the data is garbage collected
    캐시가 만료되면 가비지 컬렉션이 실행되어 클라이언트는 데이터를 더이상 사용할 수 없다.

- Cache is backup data to display while fetching
  데이터가 캐시에 있는동안에는 데이터를 fetching할때 Cache를 backup data로 사용할 수 있다.
