# First project: Blog-em Ipsum

- Gets data from https://jsonplaceholder.typicode.com
- Very simple, focus on React Query concepts
  - Fetching data
  - Loading / error states
  - React Query dev tools
  - Pagination
  - Prefetching
  - Mutations

## Install Scaffolding Code

- Fork or clone course repo from https://github.com/bonnie/udemy-REACT-QUERY

```bash
$ cd base-blog-em
$ npm install
```

## Getting Started

```bash
$ npm install react-query
```

- Create query client

  - Client that manages queries and cache

- Apply `QueryProvider`

  - Provides cache and client config to children
  - Takes query client as the value

- Run `useQuery`

  - Hook that queries the server
