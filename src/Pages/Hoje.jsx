import { useUserDataContext } from "../components/ContextProvider";
import { HojeStyled } from "../components/styled/HojeStyled";

export default function Hoje() {
  const user = useUserDataContext();
  console.log(user);
  return (
    <HojeStyled>
      <div>"oi"</div>
    </HojeStyled>
  );
}
