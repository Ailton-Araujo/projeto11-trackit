import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled, { css } from "styled-components";
import dayjs from "dayjs";
import WeekDaysButtons from "../../components/WeekDaysButtons";
import { CreateHabitStyled } from "../../components/styled/CreateHabitStyled";
import { postHabit } from "../../components/Axios";

export default function CreateHabit({
  token,
  setCreateHabit,
  newHabit,
  setNewHabit,
  setListHabits,
  setNumberOfHabits,
  weekdays,
}) {
  const [tryCreateHabit, setTryCreateHabit] = useState(false);

  function sendHabit(e) {
    e.preventDefault();

    function sucessPost(data) {
      setListHabits((prevState) => [...prevState, data]);
      setNumberOfHabits((prevState) =>
        data.days.includes(dayjs().day())
          ? [...prevState, data]
          : [...prevState]
      );
      setCreateHabit(false);
      setNewHabit({ name: "", days: [] });
    }

    if (newHabit.days.length === 0) {
      alert("Selecione pelo menos um dia para o seu Hábito.");
    } else {
      setTryCreateHabit((prevState) => !prevState);
      postHabit(newHabit, token, sucessPost, setTryCreateHabit);
    }
  }

  function eventHandler(position) {
    if (newHabit.days.includes(position)) {
      setNewHabit((prevState) => ({
        ...prevState,
        days: [...prevState.days.filter((value) => value !== position)],
      }));
    } else {
      setNewHabit((prevState) => ({
        ...prevState,
        days: [...prevState.days, position],
      }));
    }
  }
  return (
    <CreateHabitStyled data-test="habit-create-container" onSubmit={sendHabit}>
      <input
        data-test="habit-name-input"
        disabled={tryCreateHabit}
        id="habit"
        type="text"
        placeholder="nome do hábito"
        value={newHabit.habit}
        onChange={(e) =>
          setNewHabit((prevState) => ({
            ...prevState,
            name: e.target.value,
          }))
        }
        required
      />
      <span>
        {weekdays.map((day, index) => (
          <WeekDaysButtons
            key={index}
            day={day}
            index={index}
            noActive={tryCreateHabit}
            habitDays={newHabit.days}
            eventHandler={eventHandler}
          />
        ))}
      </span>
      <div>
        <FormButton
          data-test="habit-create-cancel-btn"
          disabled={tryCreateHabit}
          layout={"cancel"}
          type="button"
          onClick={() => setCreateHabit((prevState) => !prevState)}
        >
          Cancelar
        </FormButton>
        <FormButton
          data-test="habit-create-save-btn"
          disabled={tryCreateHabit}
          layout={"save"}
          type="subimit"
        >
          {tryCreateHabit ? (
            <ThreeDots
              height="20"
              width="60"
              radius="10"
              color=" #FFFFFF"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Salvar"
          )}
        </FormButton>
      </div>
    </CreateHabitStyled>
  );
}

const FormButton = styled.button`
  width: 84px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Lexend Deca", sans-serif;
  border: none;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  ${({ layout }) =>
    layout === "save" &&
    css`
      background: #52b6ff;
      color: #ffffff;
    `};

  ${({ layout }) =>
    layout === "cancel" &&
    css`
      background: none;
      color: #52b6ff;
    `};
  &:disabled {
    opacity: 0.7;
  }
`;
