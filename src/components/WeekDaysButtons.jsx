import { WeekDaysButtonStyled } from "./styled/WeekDaysButtonStyled";
export default function WeekDaysButtons({
  day,
  index,
  noActive,
  habitDays,
  eventHandler,
}) {
  return (
    <WeekDaysButtonStyled
      data-test="habit-day"
      selected={habitDays.includes(index)}
      disabled={noActive}
      type="button"
      onClick={() => eventHandler(index)}
    >
      {day}
    </WeekDaysButtonStyled>
  );
}
