import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useHabitStatusContext } from "./ContextProvider";

import { FooterStyled } from "./styled/FooterStyled";
export default function Footer() {
  const habitDone = useHabitStatusContext();
  return (
    <FooterStyled>
      <Link to={"/habitos"}>Hábitos</Link>
      <Link to={"/hoje"}>
        <CircularProgressbar
          value={habitDone}
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

      <Link to={"/historico"}>Histórico</Link>
    </FooterStyled>
  );
}
