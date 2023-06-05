import { HabitStyled } from "../../components/styled/HabitStyled";
import { deleteHabit } from "../../components/Axios";
import WeekDaysButtons from "../../components/WeekDaysButtons";
import dump from "../../assets/dump.svg";
import { useEffect } from "react";

export default function Habit({
  id,
  token,
  name,
  weekdays,
  daysList,
  listHabits,
  setListHabits,
  setLoading,
  setNumberOfHabits,
}) {
  function tryDeleteHabit() {
    if (confirm("Você realmente deseja deletar esse habito") === true) {
      function sucessDelete() {
        setListHabits((prevState) => [
          ...prevState.filter((habit) => habit.id !== id),
        ]);
        setNumberOfHabits((prevState) => [
          ...prevState.filter(
            (habit) => habit.id !== id && habit.days.includes
          ),
        ]);
      }
      deleteHabit(id, token, sucessDelete);
    }
  }

  useEffect(() => {
    if (listHabits.lenght === 0) {
      setLoading(false);
    }
  }, [listHabits]);

  return (
    <HabitStyled data-test="habit-container">
      <p data-test="habit-name">{name}</p>
      {weekdays.map((day, index) => (
        <WeekDaysButtons
          key={index}
          day={day}
          index={index}
          noActive={true}
          habitDays={daysList}
          eventHandler={"none"}
        />
      ))}
      <span>
        <button data-test="habit-delete-btn" onClick={tryDeleteHabit}>
          <img src={dump} alt="delete" />
        </button>
      </span>
    </HabitStyled>
  );
}
