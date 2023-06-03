import check from "../assets/check.svg";
import { TodayStyled } from "./styled/TodayStyled";
import { useHabitStatusContext } from "./ContextProvider";
import { statusTodayHabit } from "./Axios";
import { useEffect, useState } from "react";

export default function TodayHabit({ habit, totalDone, setTotalDone, token }) {
  const { setHabitDone } = useHabitStatusContext();
  const [statusHabit, setStatusHabit] = useState(habit.done);
  const [streakHabits, setStreakHabits] = useState({
    current: habit.currentSequence,
    highest: habit.highestSequence,
  });

  function eventHandler() {
    function sucessChange() {
      setStatusHabit((prevState) => !prevState);
      if (statusHabit) {
        setTotalDone((prevState) => prevState - 1);
        if (streakHabits.current === streakHabits.highest) {
          setStreakHabits((prevState) => ({
            highest: prevState.highest - 1,
            current: prevState.current - 1,
          }));
        } else {
          setStreakHabits((prevState) => ({
            ...prevState,
            current: prevState.current - 1,
          }));
        }
      } else {
        setTotalDone((prevState) => prevState + 1);
        if (streakHabits.current === streakHabits.highest) {
          setStreakHabits((prevState) => ({
            highest: prevState.highest + 1,
            current: prevState.current + 1,
          }));
        } else {
          setStreakHabits((prevState) => ({
            ...prevState,
            current: prevState.current - 1,
          }));
        }
      }
    }
    statusTodayHabit(habit.id, statusHabit, token, sucessChange);
  }
  useEffect(() => {
    setHabitDone(totalDone);
  }, [totalDone]);
  return (
    <TodayStyled
      data-test="today-habit-container"
      statusHabit={statusHabit}
      recordStatus={streakHabits.current === streakHabits.highest}
    >
      <div>
        <h1 data-test="today-habit-name">{habit.name}</h1>
        <p data-test="today-habit-sequence">
          Sequência atual:{" "}
          <span>
            {streakHabits.current} {streakHabits.current <= 1 ? "dia" : "dias"}
          </span>
        </p>
        <p data-test="today-habit-record">
          Seu recorde:{" "}
          <span>
            {streakHabits.highest} {streakHabits.highest <= 1 ? "dia" : "dias"}
          </span>
        </p>
      </div>
      <button data-test="today-habit-check-btn" onClick={eventHandler}>
        <img src={check} alt="check"></img>
      </button>
    </TodayStyled>
  );
}
