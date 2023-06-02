import { useNavigate } from "react-router-dom";
import { useUserDataContext } from "../components/ContextProvider";
import { HeaderStyled } from "./styled/HeaderStyled";

export default function Header() {
  const {
    user: { image, name },
    setUser,
  } = useUserDataContext();

  const navigate = useNavigate();
  return (
    <HeaderStyled data-test="header">
      <p>TrackIt</p>
      <img data-test="avatar" src={image} alt={name} />
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
