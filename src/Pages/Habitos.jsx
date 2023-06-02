import { useEffect, useState } from "react";
import { HabitosStyled } from "../components/styled/HabitosStyled";
import { getHabits } from "../components/Axios";
import { useUserDataContext } from "../components/ContextProvider";
import CreateHabit from "../components/CreateHabit";
import Habits from "../components/Habits";

export default function Habitos() {
  const {
    user: { token },
  } = useUserDataContext();
  const [createHabit, setCreateHabit] = useState(false);
  const [newHabit, setNewHabit] = useState({ name: "", days: [] });
  const [listHabits, setListHabits] = useState([]);
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  useEffect(() => {
    getHabits(token, setListHabits);
  }, [listHabits]);

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
          />
        ))}
    </HabitosStyled>
  );
}
