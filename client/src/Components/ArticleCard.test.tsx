import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { ArticleCard } from "./ArticleCard";

const article = {
  name: "test",
  variantName: "test",
  prices: {
    currency: "$",
    regular: {
      value: 10,
    },
  },
  images: [
    {
      path: "https://cdn1.home24.net/images/media/catalog/product/200x200/png/-/1/-1000062031-210726-10044100341-IMAGE-P000000001000062031.webp",
    },
  ],
};

test("renders the ArticleCard", () => {
  const { getByTestId } = render(
    <ArticleCard article={article} addToCart={jest.fn()} />
  );
  const linkElement = getByTestId("ArticleCard");
  expect(linkElement).toBeInTheDocument();
});
