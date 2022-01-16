import React from "react";
import styled from "@emotion/styled";

export default function Logo() {
  const LogoContainer = styled.div`
    width: 155px;
    float: left;

    img{
        width:100%;
    }

    @media only screen and (max-width: 600px) {
        margin:0 auto;
        float: initial;
    }
}
  `;

  return (
    <LogoContainer className={"logo"}>
      <a href="/">
        <img src={"/home24_logo.svg"} alt="Logo" />
      </a>
    </LogoContainer>
  );
}
