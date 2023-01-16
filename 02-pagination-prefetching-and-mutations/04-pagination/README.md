# Pagination

- Track current page in component state (currentPage)

- Use query keys that include the page number `["poats", currentPage]`

- User clicks `"next page"` or `"previous page"` button

  - update `currentPage` state

  - fire off new query
