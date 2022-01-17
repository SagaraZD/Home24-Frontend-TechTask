import React from "react";
import styled from "@emotion/styled";

export default function Search() {
  const Main = styled.div`
    position: absolute;
    top: 2em;
    right: 0%;
    transform: translate(0%, -49%);
    cursor: pointer;

    @media only screen and (max-width: 600px) {
      top: 2em;
      position: relative;
      width: 250px;
      margin: 0 auto;
    }

    @keyframes {
      0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
      50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      100% {
        transform: rotate(1800deg);
      }
    }
  `;

  const Input = styled.input`
    padding: 10px;
    width: 40px;
    height: 40px;
    background: none;
    border: 2px solid #f45334;
    border-radius: 50px;
    box-sizing: border-box;
    font-size: 16px;
    color: #fff;
    outline: none;
    transition: 0.5s;
    &::placeholder {
      color:#fff;
    }
    &:hover {
      width: 350px;
      background: #fff;
      border-radius: 10px;
      color: #000;
      &::placeholder {
        color:#a1a1a1;
      }
    }
    @media only screen and (max-width: 600px) {
      width: 250px;
      &::placeholder {
        color:#a1a1a1;
      }
      color: #000;
      &:hover {
        width: 250px;
        }
      }
    }
  `;

  return (
    <div>
      <Main className="search">
        <form name="search">
          <Input
            type="text"
            name="txt"
            placeholder="What are you looking for?"
          ></Input>
        </form>
        <i className="fas fa-search search-icon"> </i>
      </Main>
    </div>
  );
}
