import styled from "styled-components";

export const TodayStyled = styled.li`
  width: 340px;
  height: 94px;
  padding: 15px;
  display: flex;
  margin-bottom: 10px;
  background: #ffffff;
  border-radius: 5px;
  div {
    width: 240px;
  }
  h1 {
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 7px;
  }
  p {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #666666;
  }
  p:nth-child(2) {
    span {
      color: ${({ statusHabit }) => (statusHabit ? "#8FC549" : "#666666")};
    }
  }

  p:nth-child(3) {
    span {
      color: ${({ statusHabit, recordStatus }) =>
        statusHabit ? (recordStatus ? "#8FC549" : "#666666") : "undefined"};
    }
  }

  button {
    width: 70px;
    height: 70px;
    background: ${({ statusHabit }) => (!statusHabit ? "#ebebeb" : "#8FC549")};
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    img {
      width: 36px;
      height: 28px;
    }
  }
`;
