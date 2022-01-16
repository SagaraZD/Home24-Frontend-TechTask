import React, { useState } from 'react';
import { Category } from "./types";
import styled from "@emotion/styled";
import { MenuMobile } from "./Menu";
import { Modal, Button , Col } from "react-bootstrap";

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
        <i className="fa" onClick={handleShow}>&#xf07a;</i> <span> {total} </span>
      </Cart>
      <MenuMobile list={categories} />
      <div className={"clear"} />


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Got to checkout
          </Button>
        </Modal.Footer>
      </Modal>

    </SubHeaderContainer>
  );
};
