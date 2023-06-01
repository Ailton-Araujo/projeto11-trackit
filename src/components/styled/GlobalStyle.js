import { createGlobalStyle } from "styled-components";
import ResetStyle from "./ResetStyle";

const GlobalStyle = createGlobalStyle`

  ${ResetStyle}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Lexend Deca", sans-serif;
    background: #ffffff;
    #root{
      position: relative;
    }
  }
`;

export default GlobalStyle;
