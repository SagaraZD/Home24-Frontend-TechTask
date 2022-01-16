import React from "react";
import { Category } from "./types";
import styled from "@emotion/styled";
import { MenuMobile } from "./Menu";

interface Props {
  total: Number;
  count: Number;
  name: String;
  categories: Category[];
}

const SubHeaderContainer = styled.div`
  background: #fff;
  padding: 10px;
  margin-bottom: 30px;
  h1 {
    float: left;
  }
`;

const Heading = styled.div`
  float: left;
`;

const Cart = styled.div`
  float: left;
`;

export const SubHeader: React.FC<Props> = ({
  total,
  count,
  name,
  categories,
}) => {
  return (
    <SubHeaderContainer>
      <Heading>
        <h1>
          {name}
          <small> ({count})</small>
        </h1>
      </Heading>

      <Cart>Cart({total})</Cart>
      <MenuMobile list={categories} />
      <div className={"clear"} />
    </SubHeaderContainer>
  );
};
