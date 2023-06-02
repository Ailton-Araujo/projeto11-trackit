import styled from "styled-components";

export const HabitStyled = styled.div`
  width: 340px;
  height: 91px;
  padding: 15px 20px;
  margin-bottom: 10px;
  background: #ffffff;
  border-radius: 5px;
  position: relative;

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 8px;
  }
  span {
    button {
      background: none;
      border: none;
      position: absolute;
      top: 10px;
      right: 10px;
      img {
        width: 13px;
        height: 15px;
      }
    }
  }
`;
