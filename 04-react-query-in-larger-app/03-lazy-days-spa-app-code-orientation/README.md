# 03. Lazy Days Spa App Code Orientation

## Client Code Structure

- auth: `signin`, `signup`, `signout` functions

- axiosInstance: axios instance with JWT header

- components:

  - hooks: almost all of lecture coding is going to be done in the hooks files

- images: staff's images

- mocks: will be used for testing

- react-query: these code is for referencing

- test-utils: for testing

- theme: ChakraUI theme

- types: written in TypeScript

- user-storage: use local storage to persist user on the web, `getStoredUser`, `setStoredUser`, `clearStoredUser` functions

## TypeScript

- Written using TypeScript

  - should be able to follow even if you don't use TypeScript

  - will require some fussing over TypeScript at points

- Don't car about TypeScript?

  - `// @ts-nocheck` at top of problem file, or

  - `// @ts-ignore` above problem line

  - Not recommending in general, just for folks who aren't using TypeScript
