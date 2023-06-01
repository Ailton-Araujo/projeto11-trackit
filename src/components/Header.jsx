import { useNavigate } from "react-router-dom";
import { useUserDataContext } from "../components/ContextProvider";
import { useUserDataContextUpdate } from "../components/ContextProvider";
import { HeaderStyled } from "./styled/HeaderStyled";
export default function Header() {
  const user = useUserDataContext();
  const setUser = useUserDataContextUpdate();
  const navigate = useNavigate();
  return (
    <HeaderStyled data-test="header">
      <p>TrackIt</p>
      <img src={user.image} alt={user.name} />
      <button
        onClick={() => {
          localStorage.removeItem("UserData");
          setUser({});
          navigate("/");
        }}
      >
        tste
      </button>
    </HeaderStyled>
  );
}
