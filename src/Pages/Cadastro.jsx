import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SingInStyled } from "../components/styled/SingInStyled";
import { singIn } from "../components/Axios";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const navigate = useNavigate();

  function singInSend(e) {
    e.preventDefault();

    const singInData = {
      email,
      name,
      image,
      password,
    };

    function singInSucess() {
      navigate("/");
    }

    function singInFailure() {
      console.log("erro");
    }
    singIn(singInData, singInSucess, singInFailure);
  }

  return (
    <SingInStyled>
      <div>
        <img />
        <p>TrackIt</p>
      </div>
      <form onSubmit={singInSend}>
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
        <input
          data-test="user-name-input"
          type="text"
          id="name"
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          data-test="user-image-input"
          type="url"
          id="imgUser"
          placeholder="foto"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button data-test="signup-btn" type="subimit">
          Entrar
        </button>
      </form>
      <Link data-test="login-link" to={"/"}>
        Não tem uma conta? Cadastre-se!
      </Link>
    </SingInStyled>
  );
}
