import React from "react";
import styled from "@emotion/styled";

export default function Loader() {
  const Main = styled.div`
    min-height: 100vh;
  `;
  const Loader = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
  `;
  return (
    <Main>
      <Loader>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </Loader>
    </Main>
  );
}
