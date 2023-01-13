# (optional) TROUBLESHOOTING: create-react-app and React Query 4.10+

Note: this information is optional! Feel free to skip it if you're not experiencing these issues.

## The issue

After adding `@tanstack/react-query` version 4.10 or above to a `create-react-app` project,

- your app shows a blank page

- you see this in the browser JavaScript console (line number may be different from 1403):

  > Uncaught SyntaxError: Unexpected token ? <u>bundle.js:1403</u>

- **Or**, depending on your `create-react-app` version, you might see this error in the browser:

  > <pre>
  > ./node_module/@tanstack/match-sorter-utils/build/umd/index.production.js Module parse failed: Unexpected token (504:47)
  > File was processed with these loaders:
  > You may need an additional loader to handle the result of these loaders.
  > |     return e.rank === n.rank ? 0 : e.rank > n.rank ? -1 : 1;
  > |   }, e.rankItem = function (e, n, t) {
  > >     if ((t = t || {}).threshold = t.threshold ?? o.MATCHES, !t.accessors) {
  > |       const r = s(e, n, t);
  > |       return {
  > </pre>

- If you click on the line number in the browser console error, it corresponds to this line in the React Query code:

  ```js
  if ((t = t || {}).threshold = t.threshold ?? o.MATCHES, !t.accessors) {
  ```

  (You can also see this offending line of code within its surroundings in the screenshot above.)

## The (temporary) fix

Update the browserlist in package.json to remove more recent browsers, from:

````json
{
"browserslist": { "production": [ ">0.2%", "not dead", "not op_mini all" ], "development": [ "last 1 chrome version", "last 1 firefox version", "last 1 safari version" ]},
}
to:

```json
{
"browserslist": [ ">0.2%", "not dead", "not op_mini all"],
}
````

(reference: [this GitHub issue comment](https://github.com/facebook/create-react-app/issues/9468#issuecomment-694191642)).

**If this doesn't fix the issue**, you may need to remove the node modules cache. From the [create-react-app browserlist docs](https://create-react-app.dev/docs/supported-browsers-features/#configuring-supported-browsers):

When editing the `browserslist` config, you may notice that your changes don't get picked up right away. This is due to an [issue in babel-loader](https://github.com/babel/babel-loader/issues/690) not detecting the change in your `package.json`. A quick solution is to delete the `node_modules/.cache` folder and try again.

**If that still doesn't work**, you can try this more aggressive reset:

- Delete your `node_modules` folder

- Run `npm cache clean --force`

- Run `npm install`

## Why isn't this a great solution?

This works, but it's kind of a hack. Excluding recent browsers in development may limit the JavaScript features you can use while developing (see the [create-react-app browserlist docs](https://create-react-app.dev/docs/supported-browsers-features/#configuring-supported-browsers) for more details). For this course, however, it will not make a difference.

## The explanation

It seems the [nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) in this React Query line causes issues for the babel settings in some versions of `create-react-app` (including the most recent as of writing this article in October 2022). The GitHub issue was closed in April 2022, [allegedly fixed by this pull request](https://github.com/pass-culture/pass-culture-main/pull/1972); however people are still reporting the issue (and I'm still seeing it!).

A better fix than the above `browserlist` hack would be to update the babel settings. However, this would involve [ejecting create-react-app](https://create-react-app.dev/docs/available-scripts/#npm-run-eject) and is outside the scope of this course.
