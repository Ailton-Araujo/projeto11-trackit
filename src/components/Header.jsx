import { useNavigate } from "react-router-dom";
import { useUserDataContext } from "../components/ContextProvider";
import { HeaderStyled } from "./styled/HeaderStyled";
import { useState } from "react";

export default function Header() {
  const {
    user: { image, name },
    setUser,
  } = useUserDataContext();
  const navigate = useNavigate();
  const [logoutStatus, setLogoutStatus] = useState(false);

  return (
    <HeaderStyled logoutStatus={logoutStatus} data-test="header">
      <p>TrackIt</p>

      <button
        type="button"
        onClick={() => {
          localStorage.removeItem("UserData");
          setUser({});
          navigate("/");
        }}
      >
        Logout
      </button>
      <img
        data-test="avatar"
        src={image}
        alt={name}
        onClick={() => setLogoutStatus((prevState) => !prevState)}
      />
    </HeaderStyled>
  );
}
