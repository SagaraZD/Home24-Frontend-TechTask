import React from "react";
import { render } from "@testing-library/react";
import Search from "./Search";

test("renders the Search", () => {
  const { getByTestId } = render(<Search />);
  const linkElement = getByTestId("Search");
  expect(linkElement).toBeInTheDocument();
});
