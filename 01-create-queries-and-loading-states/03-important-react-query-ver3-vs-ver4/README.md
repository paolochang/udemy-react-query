# IMPORTANT: React Query version 3 vs. version 4

This course was written with **React Query version 3**. On July 20, 2022, React Query version 4 was released (also known as TanStack Query, though Tanner Linsley recommends still calling it React Query if you're referring to the React version of TanStack Query).

**I would recommend using React Query version 3 for this course.**

To make sure you're installing version 3, please use this syntax to install:

```bash
$ npm install react-query@^3
```

Here are the relevant differences for this course **if you decide to use React Query version 4**:

1. The install and imports for v4 recommend `@tanstack/react-query` instead of `react-query`

2. The query keys [must be arrays](https://tanstack.com/query/v4/docs/react/guides/migrating-to-react-query-4#query-keys-and-mutation-keys-need-to-be-an-array) -- so any time the course uses a string instead of an array as a query key, you must enclose it in an array.

3. You'll need [install the devtools separately](https://tanstack.com/query/v4/docs/react/devtools) and import them from `'@tanstack/react-query-devtools'`

4. `setLogger` (used in the testing section) has been removed. You'll need to [add the logger as a QueryClient option instead](https://tanstack.com/query/v4/docs/react/guides/migrating-to-react-query-4#setlogger-is-removed).

5. [onSuccess is no longer called from setQueryData](https://tanstack.com/query/v4/docs/react/guides/migrating-to-react-query-4#onsuccess-is-no-longer-called-from-setquerydata). This [caused a kerfuffle](https://tanstack.com/query/v4/docs/react/guides/migrating-to-react-query-4#onsuccess-is-no-longer-called-from-setquerydata) when they changed the behavior in the other direction (they started calling onSuccess after setQueryData when they hadn't before) after I published the course, and I ultimately updated the course to account for this change. **This one is probably the most difficult to reconcile for React Query version 4**, and the main reason I recommend continuing to use React Query version 3 until I officially update the course to version 4.

## React Query v4 Course Repo Branch

I've created a react-query-v4 branch to the course repo to show the differences for all of the apps in v4. Feel free to use this branch as reference if you'd like to use v4 or have questions about how to achieve any of the above. Links:

- [summary of the changes](https://github.com/bonnie/udemy-REACT-QUERY/pull/15#issue-1360497047)

- Project code differences for:

  1. [blog-em-ipsum](https://github.com/bonnie/udemy-REACT-QUERY/pull/15/commits/716636de7e49920f8c2e365cf2e7f74dfd81681e)

  2. [infinite-swapi](https://github.com/bonnie/udemy-REACT-QUERY/pull/15/commits/e3f9e708fa1858e32762595b57f94d26a24e2058)

  3. [lazy-days-spa](https://github.com/bonnie/udemy-REACT-QUERY/pull/15/commits/195286d61c506bae85d3e217319b92c35c3d58a7)

As always, I'm happy to continue the discussion in the course Q&A!
