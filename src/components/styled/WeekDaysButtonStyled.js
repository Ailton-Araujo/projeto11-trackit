import styled from "styled-components";

export const WeekDaysButtonStyled = styled.button`
  width: 30px;
  height: 30px;
  margin: 0px 3px;
  background: ${({ selected }) => (selected ? "#CFCFCF" : "#ffffff")};
  border: 1px solid ${({ selected }) => (selected ? "#CFCFCF" : "#d5d5d5")};
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: ${({ selected }) => (selected ? "#FFFFFF" : "#dbdbdb")};
`;
