import { useUserDataContext } from "../components/ContextProvider";
import { HeaderStyled } from "./styled/HeaderStyled";
export default function Header() {
  const user = useUserDataContext();
  return (
    <HeaderStyled>
      <p>TrackIt</p>
      <img src={user.image} alt={user.name} />
    </HeaderStyled>
  );
}
