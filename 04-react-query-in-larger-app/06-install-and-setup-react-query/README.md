# 06. Install and set up React Query

## Install React Query

```sh
$ npm install react-query
```

## Create Query Client Instance

- Create Query Client under `react-query/queryClient.ts` to keep the separate error handler. Also the error handler and other defaults settings can be set in a self contained file, instead of pollute the App file.

  In `react-query/queryClient.ts`:

  ```ts
  import { QueryClient } from "react-query";

  export const queryClient = new QueryClient();
  ```

## Set up Query Client Provider in App file

- import `queryClient`

  ```ts
  import { ChakraProvider } from "@chakra-ui/react";
  import { ReactElement } from "react";
  import { QueryClientProvider } from "react-query";
  import { ReactQueryDevtools } from "react-query/devtools";

  import { queryClient } from "../../react-query/queryClient";
  import { theme } from "../../theme";
  import { Loading } from "./Loading";
  import { Navbar } from "./Navbar";
  import { Routes } from "./Routes";

  export function App(): ReactElement {
    return (
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Loading />
          <Routes />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ChakraProvider>
    );
  }
  ```

  `QueryClientProvider` allows to access our react-query cache and the query client.

  Keep `QueryClientProvider` under `ChakraProvider` since `QueryClientProvider` will create error and use toast on `ChakraUI`

## Including Dev Tools

- Dev tools are smart

  - don't show when `process.env.NODE_ENV === 'production'`

  - reference: https://react-query.tanstack.com/devtools

- For `create-react-app` npm start runs with `NODE_ENV = 'development'`

  - reference: https://create-react-app.dev/docs/adding-custom-environment-variables/

- dev tools won't appear when app is built

  - `NODE_ENV = 'production'`
