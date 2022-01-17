import React from "react";
import { render } from "@testing-library/react";
import { MenuDesktop, MenuMobile } from "./Menu";

const list = [
  {
    name: "Möbel",
    articleCount: 10,
    childrenCategories: [
      {
        name: "Wohnzimmer",
        urlPath: "kategorie/wohnzimmermoebel/",
      },
    ],
    categoryArticles: {
      articles: [
        {
          name: "Boxspringbett Kinx",
          variantName: "Stoff KINX: Grau - 180 x 200cm - H2 - 130 cm",
          prices: {
            currency: "EUR",
            regular: {
              value: 159999,
            },
          },
          images: [
            {
              path: "https://cdn1.home24.net/images/media/catalog/product/200x200/png/-/1/-1000062031-210726-10044100341-IMAGE-P000000001000062031.webp",
            },
          ],
        },
      ],
    },
  },
];

test("renders the Desktop menu", () => {
  const { getByTestId } = render(<MenuDesktop list={list} />);
  const linkElement = getByTestId("MenuDesktop");
  expect(linkElement).toBeInTheDocument();
});

test("renders the Mobile menu", () => {
  const { getByTestId } = render(<MenuMobile list={list} />);
  const linkElement = getByTestId("MenuMobile");
  expect(linkElement).toBeInTheDocument();
});
