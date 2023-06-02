import styled from "styled-components";

export const HabitosStyled = styled.main`
  min-height: calc(100dvh - 70px);
  background: #f2f2f2;
  padding: 30px 20px 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  section {
    width: 340px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    h1 {
      font-weight: 400;
      font-size: 23px;
      line-height: 29px;
      color: #126ba5;
    }
    button {
      width: 40px;
      height: 35px;
      border: none;
      background: #52b6ff;
      border-radius: 5px;
      font-weight: 400;
      font-size: 27px;
      line-height: 34px;
      text-align: center;
      color: #ffffff;
    }
  }
  p {
    width: 340px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
  }
`;
