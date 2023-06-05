import { useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";
import dayjs from "dayjs";
import { HabitosStyled } from "../../components/styled/HabitosStyled";
import { getHabits } from "../../components/Axios";
import {
  useTotalNumberHabits,
  useUserDataContext,
} from "../../components/ContextProvider";
import CreateHabit from "./CreateHabit";
import Habit from "./Habit";

export default function Habitos() {
  const {
    user: { token },
  } = useUserDataContext();
  const { setNumberOfHabits } = useTotalNumberHabits([]);
  const [listHabits, setListHabits] = useState([]);
  const [createHabit, setCreateHabit] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [newHabit, setNewHabit] = useState({ name: "", days: [] });

  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  useEffect(() => {
    function sucessGetHabits(data) {
      if (data.length === 0) {
        setLoading(false);
      }
      setListHabits(data);
      setNumberOfHabits(
        data.filter((habit) => habit.days.includes(dayjs().day()))
      );
    }
    getHabits(token, sucessGetHabits);
  }, []);

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

      {listHabits.length === 0 ? (
        <>
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
          {Loading && (
            <FallingLines
              color="#126ba5"
              width="100"
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          )}
        </>
      ) : (
        listHabits.map((habit) => (
          <Habit
            key={habit.id}
            id={habit.id}
            token={token}
            name={habit.name}
            weekdays={weekdays}
            daysList={habit.days}
            listHabits={listHabits}
            setListHabits={setListHabits}
            setLoading={setLoading}
            setNumberOfHabits={setNumberOfHabits}
          />
        ))
      )}
    </HabitosStyled>
  );
}
