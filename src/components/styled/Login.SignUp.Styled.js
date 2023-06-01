import styled from "styled-components";

export const LoginSignUpStyled = styled.main`
  height: 100dvh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 55px;
    gap: 8px;
    input {
      width: 303px;
      height: 45px;
      background: #ffffff;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      &::placeholder {
        padding-left: 11px;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #dbdbdb;
      }
      &:disabled {
        background: #f2f2f2;
      }
    }
    button {
      width: 303px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #52b6ff;
      border: none;
      border-radius: 5px;
      font-family: "Lexend Deca", sans-serif;
      font-weight: 400;
      font-size: 21px;
      line-height: 26px;
      text-align: center;
      color: #ffffff;
      &:disabled {
        opacity: 0.7;
      }
    }
  }
  a {
    margin-top: 25px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
  }
`;
