import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useUserDataContext } from "../components/ContextProvider";
import { HojeStyled } from "../components/styled/HojeStyled";
import { getTodayHabits } from "../components/Axios";

export default function Hoje() {
  const {
    user: { token },
  } = useUserDataContext();
  const [userHabits, setUserHabits] = useState([]);
  const now = dayjs().locale("pt-br").format("dddd, DD/MM");

  useEffect(() => {
    getTodayHabits(token, setUserHabits);
  }, []);

  return (
    <HojeStyled>
      {console.log(userHabits)}
      <h1 data-test="today">{now}</h1>
      <h2 data-test="today-counter">
        {userHabits.length === 0 &&
          "Você não tem nenhum hábito agendado para Hoje:"}
        {userHabits.length !== 0 && "Nenhum hábito concluído ainda"}
      </h2>
    </HojeStyled>
  );
}
