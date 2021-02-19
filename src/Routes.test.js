import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Routes, { RouteWithTitle } from "./Routes";

describe("The Routes component", () => {
  it("should render without crashing", () => {
    render(
      <MemoryRouter>
        <Routes />
      </MemoryRouter>
    );
  });

  it("lands on home page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes />
      </MemoryRouter>
    );
    expect(screen.getByTestId("landing")).toBeInTheDocument();
  });

  it("lands on error page", () => {
    render(
      <MemoryRouter initialEntries={["/bogus-path"]}>
        <Routes />
      </MemoryRouter>
    );
    expect(screen.getByTestId("error")).toBeInTheDocument();
  });
});

describe("The RouteWithTitle component", () => {
  it("should render without crashing", () => {
    render(
      <MemoryRouter>
        <RouteWithTitle location={{ search: "" }} />
      </MemoryRouter>
    );
  });
});
