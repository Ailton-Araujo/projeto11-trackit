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
  }

  h2 {
    width: 340px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #bababa;
    text-align: start;
    padding-bottom: 30px;
  }
  article {
    p {
      width: 340px;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: #126ba5;
      text-align: start;
      margin-bottom: 15px;
    }
    div {
      width: 340px;
      height: 50px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 5px;

      color: #f2f2f2;
    }
    button {
      width: 340px;
      padding: 8px 0px;
      margin-top: 15px;
      border: none;
      background: #52b6ff;
      border-radius: 5px;
      font-family: "Lexend Deca", sans-serif;
      font-weight: 400;
      font-size: 27px;
      line-height: 34px;
      text-align: center;
      color: #ffffff;
    }
  }

  .react-calendar {
    border-radius: 10px;
    width: 350px;

    .react-calendar__navigation__label {
      font-family: "Lexend Deca", sans-serif;
      font-size: 18px;
    }

    .react-calendar__month-view__weekdays__weekday {
      font-family: "Lexend Deca", sans-serif;
      text-decoration: none;
      abbr {
        text-decoration: none;
      }
    }

    .react-calendar__month-view__days {
      button {
        font-family: "Lexend Deca", sans-serif;
        width: 40px;
        height: 50px;
        border-radius: 50%;
        &:hover {
          scale: 1.2;
        }
      }
    }

    .react-calendar__tile--now,
    .react-calendar__tile--active {
      border-radius: 50%;
      &:hover {
        scale: 1.2;
      }
    }

    .react-calendar__tile--active {
      opacity: 0.5;
    }

    .react-calendar__tile--active.CompleteDay {
      opacity: 0.7;
      outline: 2px dotted #5cba5c;
    }
    .react-calendar__tile--active.NotCompletDay {
      opacity: 0.7;
      outline: 2px dotted #f24d4d;
    }

    .CompleteDay {
      border-radius: 50%;
      color: #f2f2f2;
      background-color: #5cba5c;
      &:hover {
        scale: 1.2;
      }
    }

    .NotCompletDay {
      border-radius: 50%;
      color: #f2f2f2;
      background-color: #f24d4d;
      &:hover {
        scale: 1.2;
      }
    }
  }
`;
