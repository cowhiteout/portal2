import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import ErrorCard from "./ErrorCard";

describe("The Error component", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <ErrorCard />
      </MemoryRouter>,
      div
    );
  });
});
