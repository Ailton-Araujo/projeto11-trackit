import { useState } from "react";
import { LoginStyled } from "../components/styled/Login.Styled";
import { Link, useNavigate } from "react-router-dom";
import { useLoginContextUpdate } from "../components/ContextProvider";
import { loginPost } from "../components/Axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useLoginContextUpdate();
  const navigate = useNavigate();

  function loginSend(e) {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    console.log(setUser);

    function loginSucess(user) {
      setUser(user);
      navigate("/hoje");
    }

    function loginFailure() {
      console.log("erro");
    }

    loginPost(loginData, loginSucess, loginFailure);
    console.log(loginData);
  }

  return (
    <LoginStyled>
      <div>
        <img />
        <p>TrackIt</p>
      </div>
      <form onSubmit={loginSend}>
        <input
          data-test="email-input"
          type="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          data-test="password-input"
          type="password"
          id="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button data-test="login-btn" type="subimit">
          Entrar
        </button>
      </form>
      <Link data-test="signup-link" to={"/cadastro"}>
        Não tem uma conta? Cadastre-se!
      </Link>
    </LoginStyled>
  );
}
