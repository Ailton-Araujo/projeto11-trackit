import { HabitStyled } from "./styled/HabitStyled";
import { deleteHabit } from "./Axios";
import WeekDaysButtons from "./WeekDaysButtons";
import dump from "../assets/dump.svg";

export default function Habits({
  id,
  token,
  name,
  weekdays,
  daysList,
  setListHabits,
}) {
  function tryDeleteHabit() {
    function sucessDelete() {
      setListHabits((prevState) => [
        ...prevState.filter((habit) => habit.id !== id),
      ]);
    }
    deleteHabit(id, token, sucessDelete);
  }

  return (
    <HabitStyled>
      <p>{name}</p>
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
