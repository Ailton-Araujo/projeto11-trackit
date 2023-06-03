import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { HistoryStyled } from "../../components/styled/HistoryStyled";
import { useUserDataContext } from "../../components/ContextProvider";
import { getHistoryHabits } from "../../components/Axios";

export default function Historico() {
  const {
    user: { token },
  } = useUserDataContext();
  const [habitHistory, setHabitHistory] = useState();
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    getHistoryHabits(token, setHabitHistory);
  }, []);

  console.log(habitHistory);
  return (
    <HistoryStyled>
      <h1>Histórico</h1>
      <Calendar
        data-test="calendar"
        onChange={onChange}
        value={value}
        calendarType={"US"}
      />
    </HistoryStyled>
  );
}
