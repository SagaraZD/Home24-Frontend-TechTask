import React, { useState } from "react";
import { Category, Article } from "../types";
import styled from "@emotion/styled";
import { MenuMobile } from "./Menu";
import { Modal, Button, Table } from "react-bootstrap";

interface Props {
  total: number;
  count: number;
  name: String;
  categories: Category[];
  cartList: Article[];
  cartTotal: number;
  clearCart: () => void;
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
    float: right;
    position: relative;
    top: 20px;
  i{
    color: #f45334;
    font-size: 20px;
    cursor:pointer;
  }
  span{
    font-size: 14px;
    position: relative;
    bottom: 10px;
    font-weight: bold;
  }
  @media only screen and (max-width: 767px) {
    float: left;
    margin-left: 20px;
    top: 11px;
 }
}
`;

export const SubHeader: React.FC<Props> = ({
  total,
  count,
  name,
  categories,
  cartList,
  cartTotal,
  clearCart,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <SubHeaderContainer>
      <Heading>
        <h1>
          {name}
          <small> ({count})</small>
        </h1>
      </Heading>

      <Cart>
        <i className="fa" onClick={handleShow}>
          &#xf07a;
        </i>{" "}
        <span> {total} </span>
      </Cart>
      <MenuMobile list={categories} />
      <div className={"clear"} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Item Name</th>
                <th>Price(EUR)</th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.prices.regular.value}</td>
                </tr>
              ))}
              <tr>
                <td> </td>
                <td>
                  <b> Total </b>
                </td>
                <td>
                  {" "}
                  <b> {cartTotal} </b>{" "}
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          {cartTotal ? (
            <Button onClick={() => clearCart()} variant="secondary">
              Clear Cart
            </Button>
          ) : null}

          <Button variant="primary" onClick={handleClose}>
            Got to checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </SubHeaderContainer>
  );
};
