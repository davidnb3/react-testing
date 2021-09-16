import { render, cleanup } from "@testing-library/react";
import App from "./App";
import React from "react";

afterEach(cleanup);

it("should take a snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});
