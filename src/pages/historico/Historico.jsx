import { useEffect, useState } from "react";
import { useUserDataContext } from "../../components/ContextProvider";
import { getHistoryHabits } from "../../components/Axios";

export default function Historico() {
  const {
    user: { token },
  } = useUserDataContext();
  const [habitHistory, setHabitHistory] = useState();
  useEffect(() => {
    getHistoryHabits(token, setHabitHistory);
  }, []);
  console.log(habitHistory);
  return "oi";
}
