import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useHabitStatusContext, useTotalNumberHabits } from "./ContextProvider";
import { FooterStyled } from "./styled/FooterStyled";

export default function Footer() {
  const { habitDone } = useHabitStatusContext();
  const { numberOfHabits } = useTotalNumberHabits();
  return (
    <FooterStyled data-test="menu">
      <Link data-test="habit-link" to={"/habitos"}>
        Hábitos
      </Link>
      <Link data-test="today-link" to={"/hoje"}>
        <CircularProgressbar
          value={
            numberOfHabits.length === 0
              ? 0
              : (habitDone / numberOfHabits.length) * 100
          }
          text="Hoje"
          background={true}
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#52B6FF",
            strokeLinecap: "round",
            textColor: "#FFFFFF",
            textSize: "18px",
            pathColor: "#FFFFFF",
            trailColor: "transparent",
          })}
        />
      </Link>

      <Link data-test="history-link" to={"/historico"}>
        Histórico
      </Link>
    </FooterStyled>
  );
}
