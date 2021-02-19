## Prerequisites (\*\*\*\*WIP)

- Set up the S3 bucket in Atlas or Tango (https://github.com/TheAtlasTango/atlas-system-apollo/tree/master/src/configuration/tenants)
- Subdomain

## Setup

- Create repository from template
  - Click 'Use this template' in upper right corner
- Clone down new repo and `cd` into it
- Search the project for 'TODO'. There are places to fill in:
  - your new repository name
  - a title for your app
  - a short description for the app
  - a dev deployment subdomain
- Run `npm install`

### Manual steps

- Add codeowners in CODEOWNERS file
- Add API URLs in .env.development and .env.production files
- When you are ready for CI/CD, uncomment (and modify if necessary):
  - .github/workflows/ci-cd-master.yml
  - .github/workflows/pull-request-test.yml

---

# Project %Repo% (TODO)

Atlas %Title% JavaScript application (TODO)

Launch Visual Studio Code > Open %Repo% folder. (TODO)

## Recommended VS Code Extensions

- Simple React Snippets
- Debugger for Chrome
- GitLens
- Import Cost
- Jest Snippets
- Markdown All in One
- markdownlint
- Prettier - Code Formatter
- webpack
- Webpack Snippets
- EditorConfig for VS Code

## Node Packages

Once the project has opened, launch a terminal window and install the required node packages from the /src folder. This uses package.json to get all node dependencies.

```node
> npm install
```

Here are a list of node packages used in this project:

react and routing

- create-react-app <https://create-react-app.dev/>
- axios (for api calls) <https://github.com/axios/axios>
- react-router-dom (client-side routing) <https://reactrouter.com/web/guides/quick-start>
- query-string (parse query strings) <https://www.npmjs.com/package/query-string>
- react-helmet (set page titles dynamically) <https://github.com/nfl/react-helmet>

i18n

- i18next (internationalization framework) <https://www.i18next.com/>
- react-i18next (react-specific package) <https://react.i18next.com/>
- i18next-browser-languagedetector (detect user's default language) <https://www.npmjs.com/package/i18next-browser-languagedetector>

internal packages

- @atlas-ui/errorboundary (catch errors in render method of components) <https://github.com/TheAtlasTango/atlas-ui-errorboundary/>
- @atlas-ui/ga (google analytics helper methods) <https://github.com/TheAtlasTango/atlas-ui-ga/>

styles

- @material-ui/core (material design system react components) <https://material-ui.com/>
- @material-ui/data-grid (free version of the data grid component) <https://material-ui.com/api/data-grid/>
- @material-ui/icons <https://material-ui.com/components/material-icons/>
- @emotion/react (used with material-ui) <https://emotion.sh/docs/@emotion/react>
- @emotion/styled (used with material-ui) <https://emotion.sh/docs/@emotion/styled>
- @fontsource/roboto <https://www.npmjs.com/package/@fontsource/roboto>

testing

- jest (test-runner for unit tests) <https://jestjs.io/>
- @testing-library/react (unit test library for react) <https://testing-library.com/docs/react-testing-library/intro/>
- @testing-library/jest-dom (jest matchers) <https://github.com/testing-library/jest-dom>
- @jest-environment-jsdom-sixteen <https://www.npmjs.com/package/jest-environment-jsdom-sixteen>

---

## Components

### index.js

Entry point to application. Contains route component.

### Routes.js

Handles the routing for our application. Contains the app component.

### App.js

Container for navigation and page components: Login, Register, Logout.

### HomePage.js

React standard Welcome page with svg logo.

### Error.js

Contains an error message for the fallback route.

---

## Design System & UI Component Library

Current Atlas & Tango design system & component library being implemented is Material-UI (`next` **v5** in alpha.)
Material UI is **based** on Material Design, but it's own interpretation.
Please only use `Material UI` + `Atlas UI` components, as defined, and supported by Atlas and our Product UX Team.

- [Material-UI React Component Library](https://next.material-ui.com/)
- [Getting Started](https://next.material-ui.com/getting-started/installation/)
- [Theming Approach](https://next.material-ui.com/customization/theming/)
- [Styling Approach: Basic](https://next.material-ui.com/styles/basics/)
- [Styling Approach: Advanced](https://next.material-ui.com/styles/advanced/)
- [Styling Approach: API](https://next.material-ui.com/styles/api/)
- [How to customize](https://next.material-ui.com/customization/how-to-customize/)
  - You can easily customize the appearance of a Material-UI component. As components can be used in different contexts, there are several approaches to customizing them. Going from the narrowest use-case to the broadest, these are:
  1. One-off customization
  2. Reusable style overrides
  3. Dynamic variation
  4. Global theme variation
  5. Global CSS override

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs dependencies. Make sure that you are connected to the VPN to install the private Atlas UI npm packages. These are packages scoped under `@atlas-ui`, e.g. `@atlas-ui/errorboundary`, and this repository's `.npmrc` file allows those to be pulled from the Nexus repository while all other npm packes are pulled from the public npm registry.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the jest test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: <https://facebook.github.io/create-react-app/docs/code-splitting>

### Analyzing the Bundle Size

This section has moved here: <https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size>

### Advanced Configuration

This section has moved here: <https://facebook.github.io/create-react-app/docs/advanced-configuration>

### `npm run build` fails to minify

This section has moved here: <https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify>
