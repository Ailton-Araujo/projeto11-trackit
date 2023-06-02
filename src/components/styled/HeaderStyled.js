import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  position: sticky;
  top: 0px;
  z-index: 1;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  p {
    font-family: "Playball", cursive;
    font-weight: 400;
    font-size: 40px;
    line-height: 49px;
    color: #ffffff;
  }
  img {
    width: 51px;
    height: 51px;
    border-radius: 100px;
  }
`;
