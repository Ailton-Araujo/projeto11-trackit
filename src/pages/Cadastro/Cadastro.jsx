import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { LoginSignUpStyled } from "../../components/styled/Login.SignUp.Styled";
import { signUp } from "../../components/Axios";
import Logo from "../../components/Logo";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [trySignUp, setTrySignUp] = useState(false);
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const navigate = useNavigate();

  function signUpSend(e) {
    e.preventDefault();
    setTrySignUp(true);
    const signUpData = {
      email,
      name,
      image,
      password,
    };

    function signUpSucess() {
      navigate("/");
    }

    function signUpFailure() {
      setTrySignUp(false);
    }

    signUp(signUpData, signUpSucess, signUpFailure);
  }

  return (
    <LoginSignUpStyled>
      <Logo />
      <form onSubmit={signUpSend}>
        <input
          disabled={trySignUp}
          data-test="email-input"
          type="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          disabled={trySignUp}
          data-test="password-input"
          type="password"
          id="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          disabled={trySignUp}
          data-test="user-name-input"
          type="text"
          id="name"
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          disabled={trySignUp}
          data-test="user-image-input"
          type="url"
          id="imgUser"
          placeholder="foto"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button disabled={trySignUp} data-test="signup-btn" type="subimit">
          {trySignUp ? (
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
            "Cadastrar"
          )}
        </button>
      </form>
      <Link data-test="login-link" to={"/"}>
        Já tem uma conta? Faça login!
      </Link>
    </LoginSignUpStyled>
  );
}
