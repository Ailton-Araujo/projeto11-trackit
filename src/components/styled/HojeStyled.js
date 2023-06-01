import styled from "styled-components";

export const HojeStyled = styled.main`
  min-height: calc(100dvh - 70px);
  background: #f2f2f2;
  padding: 30px 20px 100px;

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    text-transform: capitalize;
    color: #126ba5;
  }

  h2 {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #bababa;
    padding-bottom: 30px;
  }

  div {
    height: 300px;
    background: orange;
    border: 5px solid red;
  }
`;
