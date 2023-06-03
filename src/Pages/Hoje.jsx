import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import {
  useHabitStatusContext,
  useUserDataContext,
  useTotalNumberHabits,
} from "../components/ContextProvider";
import { HojeStyled } from "../components/styled/HojeStyled";
import { getTodayHabits } from "../components/Axios";
import TodayHabit from "../components/TodayHabit";

export default function Hoje() {
  const {
    user: { token },
  } = useUserDataContext();
  const { habitDone } = useHabitStatusContext();
  const { numberOfHabits, setNumberOfHabits } = useTotalNumberHabits();
  const [userHabits, setUserHabits] = useState([]);
  const [totalDone, setTotalDone] = useState(0);
  const now = dayjs().locale("pt-br").format("dddd, DD/MM");

  useEffect(() => {
    function sucessGetHabits(data) {
      setUserHabits(data);
      setNumberOfHabits(data);
      setTotalDone(() => data.filter((habit) => habit.done === true).length);
    }
    getTodayHabits(token, sucessGetHabits);
  }, []);
  return (
    <HojeStyled textcolor={totalDone !== 0}>
      <h1 data-test="today">{now}</h1>
      <h2 data-test="today-counter">
        {userHabits.length === 0
          ? "Você não tem nenhum hábito agendado para Hoje:"
          : habitDone !== 0
          ? `${Math.round(
              (habitDone / numberOfHabits.length) * 100
            )}% dos hábitos concluídos`
          : "Nenhum hábito concluído ainda"}
      </h2>
      <ul>
        {userHabits.map((habit) => (
          <TodayHabit
            key={habit.id}
            habit={habit}
            totalDone={totalDone}
            setTotalDone={setTotalDone}
            token={token}
          />
        ))}
      </ul>
    </HojeStyled>
  );
}
