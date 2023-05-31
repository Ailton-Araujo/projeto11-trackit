import { createGlobalStyle } from "styled-components";
import ResetStyled from "./ResetStyled";

const GlobalStyled = createGlobalStyle`
  ${ResetStyled}

  * {
    box-sizing: border-box;
  }

  html {
    font-family: "Lexend Deca", sans-serif;
  }
`;

export default GlobalStyled;
/* font-family: 'Playball', cursive; */
