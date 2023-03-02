# 09. Summary: Infinite Scroll

## Bi-directional Scrolling

- Bi-directional is useful when starting in the middle

- Aall `next` methods and properties have equivalent for `previous`

## Infinite Scroll Summary

- React Query manages

  - `pageParam` for next page to be fetched

    - `getNextPAgeParam` option

    - could be from `lastPage` or `allPages`

  - `hasNextPage`

    - boolean indicating whether `pageParam` is undefined

- Component handles calling `fetchNextPage`

  - use `hasNextPage` vaalue to determine when to stop
