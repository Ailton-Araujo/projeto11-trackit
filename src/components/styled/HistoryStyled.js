import styled from "styled-components";

export const HistoryStyled = styled.main`
  min-height: calc(100dvh - 70px);
  background: #f2f2f2;
  padding: 30px 20px 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h1 {
    width: 340px;
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    text-transform: capitalize;
    color: #126ba5;
    text-align: start;
    padding-bottom: 20px;
  }
  div {
    border-radius: 10px;
  }
`;
