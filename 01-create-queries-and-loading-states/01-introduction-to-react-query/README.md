# Introduction to React Query

`React Query`는 `React`, `React Native` application에서 사용할 수 있는 Server State 관리해주는 library이다.

## Client State vs. Server State

- Client State: 브라우저의 session에 해당하는 정보들을 일컫는다

  - Language
  - Theme

- Server state: 서버에 받은 states들로 보통 database에 저장되어 있는 정보를 일컫는다

  - user contact information
  - post data

## What problem does React Query solve

- `React Query`는 client에서 서버 데이터를 캐시로 관리한다.

  Server <-> React Query cache <-> Client

  `client`에서 data를 필요로 할때 `server`에서 바로 fetch하는 것이 아니라 `react-query`를 통해 cache를 받는다.

## React Query Manages Data

- 서버에서 받은 새 데이터로 캐를 업데이트하는 시기를 설정하는 것은 사용자의 몫이다.

  - imperative(명령형): Query Client에 있는 기존의 데이터를 무효화하고 캐시에 교체할 새 데이터를 서버에서 가져오는 방법
  - declarative(선언형): refetch condition을 선언하여 조건을 충족할시 새로운 데이터를 가져오도록 설정할 수 있다. 또한 `staleTime`으로 다시 가져오기를 언제 발동할지도 설정할수 있다.

  ```
  key: 'blog-posts'
  data: [
    1: {
      title: 'React Query',
      content: 'What is this thing?'
    },
    2: {
      title: 'React Query Mutations',
      content: 'Not just for ninja turtles'
    }
  ]
  staleTime: 30 seconds
  ```

## Other features other than Server State Management

- Loading / Error states
- pagination / infinite scroll
- prefetching data
- mutations
- de-duplication of requests
- retry on error
- callback
