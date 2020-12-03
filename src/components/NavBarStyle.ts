import styled from "styled-components";
import { ThemeType } from "../general-styles/theme";

export const Header = styled.header<{ theme: ThemeType }>`
  display: flex;
  background-color: black;
  color: white;

  nav {
    margin: 0 auto;
    display: flex;
    height: 50px;
    width: 100%;
    max-width: ${({ theme }) => theme.widths.maxPageWidth};

    > div {
      flex: 1 1 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > div.login {
      max-width: 250px;
    }
  }

  a {
    color: white;
    text-decoration: none;
  }

  .active {
    font-weight: bold;
  }
`;
