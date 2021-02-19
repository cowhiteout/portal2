import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import HomePage from "./HomePage";

describe("The HomePage component", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
      div
    );
  });
});
