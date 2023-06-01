import { useUserDataContext } from "../components/ContextProvider";
import { HojeStyled } from "../components/styled/HojeStyled";
import dayjs from "dayjs";

export default function Hoje() {
  const user = useUserDataContext();
  const now = dayjs().locale("pt-br").format("dddd, DD/MM");

  return (
    <HojeStyled>
      <h1 data-test="today">{now}</h1>
      <h2 data-test="today-counter">
        Você não tem nenhum hábito agendado para Hoje:
      </h2>
    </HojeStyled>
  );
}
