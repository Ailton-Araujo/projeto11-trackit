import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { LoginSignUpStyled } from "../components/styled/Login.SignUp.Styled";
import { useUserDataContext } from "../components/ContextProvider";
import { useUserDataContextUpdate } from "../components/ContextProvider";
import { loginPost } from "../components/Axios";
import Logo from "../components/Logo";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tryLogin, setTryLogin] = useState(false);
  const userData = useUserDataContext();
  const setUser = useUserDataContextUpdate();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.values(userData).length !== 0) {
      navigate("/hoje");
    }
  }, []);

  function loginSend(e) {
    e.preventDefault();
    setTryLogin(true);
    const loginData = {
      email,
      password,
    };

    function loginSucess(user) {
      setUser(user);
      const userStringify = JSON.stringify(user);
      localStorage.setItem("UserData", userStringify);
      navigate("/hoje");
    }

    function loginFailure() {
      setTryLogin(false);
    }

    loginPost(loginData, loginSucess, loginFailure);
  }

  return (
    <LoginSignUpStyled>
      <Logo />
      <form onSubmit={loginSend}>
        <input
          disabled={tryLogin}
          data-test="email-input"
          type="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          disabled={tryLogin}
          data-test="password-input"
          type="password"
          id="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button disabled={tryLogin} data-test="login-btn" type="subimit">
          {tryLogin ? (
            <ThreeDots
              height="15"
              width="60"
              radius="11"
              color=" #FFFFFF"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Entrar"
          )}
        </button>
      </form>

      <Link data-test="signup-link" to={"/cadastro"}>
        Não tem uma conta? Cadastre-se!
      </Link>
    </LoginSignUpStyled>
  );
}
