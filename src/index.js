import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import { muiThemeBrandDefault } from './themes/mui-theme-brand-default';
import { muiThemeTestBrandA } from './themes/mui-theme-test-brand-A';
import { muiThemeTestBrandB } from './themes/mui-theme-test-brand-B';
import { muiThemeTestBrandC } from './themes/mui-theme-test-brand-C';

// import { HashRouter as Router } from "react-router-dom"; // might use hashrouter instead.
import Routes from "./Routes.js";
import "./i18n";

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <ThemeProvider theme={muiThemeBrandDefault}>
      <Routes />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
