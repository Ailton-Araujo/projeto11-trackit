import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { LoginSignUpStyled } from "../../components/styled/Login.SignUp.Styled";
import { useUserDataContext } from "../../components/ContextProvider";
import { loginPost } from "../../components/Axios";
import Logo from "../../components/Logo";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tryLogin, setTryLogin] = useState(false);
  const { user, setUser } = useUserDataContext();

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (Object.values(user).length !== 0) {
  //     navigate("/hoje");
  //   }
  // }, []);

  function loginSend(e) {
    e.preventDefault();
    setTryLogin(true);
    const loginData = {
      email,
      password,
    };

    function loginSucess({ id, name, image, token }) {
      setUser((prevState) => ({
        ...prevState,
        id,
        name,
        image,
        token,
      }));
      const userStringify = JSON.stringify({ id, name, image, token });
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
