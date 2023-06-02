import styled from "styled-components";

export const CreateHabitStyled = styled.form`
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
  margin-bottom: 20px;
  input {
    width: 300px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    padding-left: 12px;
    border-radius: 5px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    &::placeholder {
      padding-left: 12px;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
      color: #dbdbdb;
    }
  }
  span {
    width: 340px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: start;
  }
  div {
    width: 340px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;
