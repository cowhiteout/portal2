import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes.js";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import { muiThemeBrandDefault } from './themes/mui-theme-brand-default';

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("./index.js");
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={muiThemeBrandDefault}>
          <Routes />
        </ThemeProvider>
      </BrowserRouter>,
      div
    );
  });
});
