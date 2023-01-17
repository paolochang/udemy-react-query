# 06. InfiniteScroll Component

- Wroks really nice with `useInfiniteQuery`

  - https://www.npmjs.com/package/react-infinite-scroller

- Populate two props for InfiniteScroll component:

  - `loadMore={fetchNextPage}`

  - `hasMore={hasNextPage}`

- Component takes care of detecting when to load more

- Data in `data.pages[x].results`

## Code Practice

- [People List](https://swapi.dev/api/people)

  > HTTP 200 OK
  > Content-Type: application/json
  > Vary: Accept
  > Allow: GET, HEAD, OPTIONS

  ```json
  {
      "count": 82,
      "next": "https://swapi.dev/api/people/?page=2",
      "previous": null,
      "results": [
          {
              "name": "Luke Skywalker",
              "height": "172",
              "mass": "77",
              "hair_color": "blond",
              "skin_color": "fair",
              "eye_color": "blue",
              "birth_year": "19BBY",
              "gender": "male",
              "homeworld": "https://swapi.dev/api/planets/1/",
              "films": [
                  "https://swapi.dev/api/films/1/",
                  "https://swapi.dev/api/films/2/",
                  "https://swapi.dev/api/films/3/",
                  "https://swapi.dev/api/films/6/"
              ],
              "species": [],
              "vehicles": [
                  "https://swapi.dev/api/vehicles/14/",
                  "https://swapi.dev/api/vehicles/30/"
              ],
              "starships": [
                  "https://swapi.dev/api/starships/12/",
                  "https://swapi.dev/api/starships/22/"
              ],
              "created": "2014-12-09T13:50:51.644000Z",
              "edited": "2014-12-20T21:17:56.891000Z",
              "url": "https://swapi.dev/api/people/1/"
          },
          ( ... )
      ]
  }
  ```

  Now use `InfiniteScroll` and add `Person` component

  ```js
  import InfiniteScroll from "react-infinite-scroller";
  import { useInfiniteQuery } from "react-query";
  import { Person } from "./Person";

  const initialUrl = "https://swapi.dev/api/people/";
  const fetchUrl = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  export function InfinitePeople() {
    // TODO: get data for InfiniteScroll via React Query
    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
      "people",
      ({ pageParam = initialUrl }) => fetchUrl(pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.next || undefined,
      }
    );

    return (
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map((pageData) =>
          pageData.results.map((person) => (
            <Person key={person.name} {...person} />
          ))
        )}
      </InfiniteScroll>
    );
  }
  ```

  Error occurs

  > <pre>
  > Uncaught TypeError: Cannot read properties of undefined (reading 'pages')
  >  at InfinitePeople (InfinitePeople.jsx:22:1)
  > </pre>

  Check the solution on the next lesson
