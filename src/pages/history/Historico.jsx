import { useEffect, useState } from "react";
import styled from "styled-components";
import { FallingLines } from "react-loader-spinner";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import localizedFormat from "dayjs/plugin/localizedFormat";

import { HistoryStyled } from "../../components/styled/HistoryStyled";
import { useUserDataContext } from "../../components/ContextProvider";
import { getHistoryHabits } from "../../components/Axios";

export default function Historico() {
  dayjs.extend(localizedFormat);
  const {
    user: { token },
  } = useUserDataContext();
  const [habitHistory, setHabitHistory] = useState([]);
  const [daySelect, setdaySelect] = useState(false);
  const [habitsday, setHabitsDay] = useState({});
  const [value, onChange] = useState(new Date());

  function openHabits(date) {
    setHabitsDay({
      ...habitHistory.find(
        (habit) => habit.day === dayjs(date).format("DD/MM/YYYY")
      ),
    });
    setdaySelect(true);
  }
  useEffect(() => {
    getHistoryHabits(token, setHabitHistory);
  }, []);

  return (
    <HistoryStyled>
      <h1>Histórico</h1>
      {!daySelect ? (
        <h2>Selecione um dia para mais detalhes:</h2>
      ) : Object.values(habitsday).length === 0 ? (
        <h2>O dia selecionado não possui nenhum habito:</h2>
      ) : (
        <h2>
          Segue os detalhes dos habitos de{" "}
          <span>
            {console.log(new Date(habitsday.day).toLocaleDateString())}
            {dayjs(new Date(habitsday.day).toLocaleDateString())
              .locale("pt-br")
              .format(`dddd, DD/MM`)}
          </span>
        </h2>
      )}
      {habitHistory.length === 0 ? (
        <FallingLines
          color="#126ba5"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      ) : Object.values(habitsday).length === 0 ? (
        <Calendar
          data-test="calendar"
          onChange={onChange}
          tileClassName={({ date }) => {
            let daysCompleted = [];
            let daysNotCompleted = [];

            habitHistory.forEach(({ day, habits }) => {
              if (habits.filter((habit) => habit.done === false).length === 0) {
                daysCompleted.push(day);
              } else {
                daysNotCompleted.push(day);
              }
            });

            if (
              dayjs(date).format("DD/MM/YYYY") !==
              dayjs(new Date()).format("DD/MM/YYYY")
            ) {
              if (daysCompleted.includes(dayjs(date).format("DD/MM/YYYY"))) {
                return "CompleteDay";
              }
              if (daysNotCompleted.includes(dayjs(date).format("DD/MM/YYYY"))) {
                return "NotCompletDay";
              }
            }
          }}
          formatDay={(locale, date) => dayjs(date).format("DD")}
          value={value}
          onClickDay={(value) => openHabits(value)}
          calendarType={"US"}
        />
      ) : (
        <article>
          {habitsday.habits.some(({ done }) => done === false) ? (
            <p>Poxa, você deixou alguns hábitos para trás</p>
          ) : (
            <p>
              Parabéns você conseguiu completar todos os hábitos nesse dia!!!
            </p>
          )}
          {habitsday.habits.map((habit) => {
            console.log(habitsday);
            return <Habit bg={habit.done}> {habit.name}</Habit>;
          })}
          <button
            onClick={() => {
              setdaySelect(false);
              setHabitsDay({});
            }}
          >
            Voltar ao calendário
          </button>
        </article>
      )}
    </HistoryStyled>
  );
}

const Habit = styled.div`
  background-color: ${({ bg }) => (bg ? "#5cba5c" : "#f24d4d")};
`;
