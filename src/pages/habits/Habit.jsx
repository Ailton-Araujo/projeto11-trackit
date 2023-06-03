import { HabitStyled } from "../../components/styled/HabitStyled";
import { deleteHabit } from "../../components/Axios";
import WeekDaysButtons from "../../components/WeekDaysButtons";
import dump from "../../assets/dump.svg";

export default function Habit({
  id,
  token,
  name,
  weekdays,
  daysList,
  setListHabits,
  setNumberOfHabits,
}) {
  function tryDeleteHabit() {
    function sucessDelete() {
      setListHabits((prevState) => [
        ...prevState.filter((habit) => habit.id !== id),
      ]);
      setNumberOfHabits((prevState) => [
        ...prevState.filter((habit) => habit.id !== id && habit.days.includes),
      ]);
    }
    deleteHabit(id, token, sucessDelete);
  }

  return (
    <HabitStyled data-test="habit-create-container">
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
