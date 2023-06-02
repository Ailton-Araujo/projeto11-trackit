import { LogoStyled } from "./styled/LogoStyled";
import logoIcon from "../assets/logo.svg";

export default function Logo() {
  return (
    <LogoStyled>
      <img src={logoIcon} alt="TrackIt" />
      <p>TrackIt</p>
    </LogoStyled>
  );
}
