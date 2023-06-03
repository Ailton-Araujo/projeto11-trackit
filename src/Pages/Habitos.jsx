import { useEffect, useState } from "react";
import dayjs from "dayjs";
useNavigate;
import { HabitosStyled } from "../components/styled/HabitosStyled";
import { getHabits } from "../components/Axios";
import {
  useTotalNumberHabits,
  useUserDataContext,
} from "../components/ContextProvider";
import CreateHabit from "../components/CreateHabit";
import Habits from "../components/Habits";
import { useNavigate } from "react-router-dom";

export default function Habitos() {
  const {
    user: { token },
  } = useUserDataContext();
  const { numberOfHabits, setNumberOfHabits } = useTotalNumberHabits();
  const [createHabit, setCreateHabit] = useState(false);
  const [newHabit, setNewHabit] = useState({ name: "", days: [] });
  const [listHabits, setListHabits] = useState([]);
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const navigate = useNavigate();

  const entries = window.performance.getEntriesByType("navigation");

  useEffect(() => {
    console.log(entries);
    // if (entries[0].type === "reload") {
    //   navigate("/");
    // }
    function sucessGetHabits(data) {
      setListHabits(data);
      setNumberOfHabits(
        data.filter((habit) => habit.days.includes(dayjs().day()))
      );
    }
    getHabits(token, sucessGetHabits);
  }, []);
  console.log(numberOfHabits);
  return (
    <HabitosStyled>
      <section>
        <h1>Meus hábitos</h1>
        <button
          data-test="habit-create-btn"
          onClick={() => setCreateHabit((prevState) => !prevState)}
        >
          +
        </button>
      </section>

      {createHabit && (
        <CreateHabit
          token={token}
          setCreateHabit={setCreateHabit}
          newHabit={newHabit}
          setNewHabit={setNewHabit}
          setListHabits={setListHabits}
          setNumberOfHabits={setNumberOfHabits}
          weekdays={weekdays}
        />
      )}
      {listHabits === 0 && (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      )}
      {listHabits !== 0 &&
        listHabits.map((habit) => (
          <Habits
            key={habit.id}
            id={habit.id}
            token={token}
            name={habit.name}
            weekdays={weekdays}
            daysList={habit.days}
            setListHabits={setListHabits}
            setNumberOfHabits={setNumberOfHabits}
          />
        ))}
    </HabitosStyled>
  );
}
