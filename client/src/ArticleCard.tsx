import React from "react";
import { Article } from "./types";
import styled from "@emotion/styled";

interface Props {
  article: Article;
  addToCart:(article:Article)=>void;
}
var intlNumberFormatValues = ["de-DE", "currency", "EUR"];
export var formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
    style: intlNumberFormatValues[1],
    currency: intlNumberFormatValues[2],
  });

const Button = styled.button`
  border: none;
  background: #f45334;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  line-height: 23px;
  width: 100%;
  padding: 5px 0px;
  &:hover {
    color: white;
    background: #e72500;
    text-decoration: none;
  }
`;

const Main = styled.div`
  margin-bottom: 20px;
  position: relative;
  padding: 20px;
  background: #fff;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  &:hover {
    box-shadow: 0 0 20px rgb(0 0 0 / 10%);
    z-index: 7;
  }
`;

export const ArticleCard: React.FC<Props> = ({ article, addToCart }) => {
  return (
    <Main>
      <div className={"item"}>
        <img src={article.images[0].path} />
        <div className={"name"}>{article.name}</div>
        <div className={"price"}>
          {formatter.format(article.prices.regular.value / 100)}
        </div>
      </div>

      <Button onClick={()=>addToCart(article)}>Add to cart</Button>
    </Main>
  );
};
