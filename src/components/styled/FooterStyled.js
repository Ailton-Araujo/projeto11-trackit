import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 0px 35px;
  background: #ffffff;
  position: fixed;
  bottom: 0px;
  a {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }
  .CircularProgressbar {
    width: 91px;
    height: 91px;
    position: absolute;
    top: -25px;
    left: calc(50% - 45px);
  }
`;
