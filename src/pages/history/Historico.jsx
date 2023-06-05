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
  const [Loading, setLoading] = useState(true);
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
    function sucessGetHistory(data) {
      if (data.length === 0) {
        setLoading(false);
      }
      setHabitHistory(data);
    }
    getHistoryHabits(token, sucessGetHistory);
  }, []);

  return (
    <HistoryStyled>
      <h1>Histórico</h1>
      {habitHistory.length === 0 ? (
        <h2>Você ainda não criou nenhum hábito para o nosso hístorico</h2>
      ) : !daySelect ? (
        <h2>Selecione um dia para mais detalhes:</h2>
      ) : Object.values(habitsday).length === 0 ? (
        <h2>O dia selecionado não possui nenhum habito:</h2>
      ) : (
        <h2>
          Segue os detalhes dos habitos de{" "}
          <span>
            {dayjs(new Date(habitsday.habits[0].date))
              .locale("pt-br")
              .format(`dddd, DD/MM`)}
          </span>
        </h2>
      )}
      {habitHistory.length === 0 ? (
        Loading && (
          <FallingLines
            color="#126ba5"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        )
      ) : Object.values(habitsday).length === 0 ? (
        <Calendar
          data-test="calendar"
          onChange={onChange}
          tileClassName={({ date }) => {
            const daysCompleted = [];
            const daysNotCompleted = [];

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
            return (
              <Habit key={habit.id} bg={habit.done}>
                {" "}
                {habit.name}
              </Habit>
            );
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
