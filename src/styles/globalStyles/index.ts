import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamilies.arial};
    box-sizing: border-box;
  }

 html {
   font-size: 16px;
 }

 body {
   width: 100%;
   max-width: 800px;
   margin: 0 auto;
   border: 1px solid black;
  }
  `;

export default GlobalStyle;
