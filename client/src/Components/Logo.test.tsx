import React from "react";
import { render } from "@testing-library/react";
import Logo from "./Logo";

test('renders the Logo', () => {
    const { getByAltText } = render(<Logo />);
    const linkElement = getByAltText('Logo');
    expect(linkElement).toBeInTheDocument();
  });
  