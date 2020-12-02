import styled from "styled-components";
import { ThemeType } from "../general-styles/theme";

export const HomePageStyle = styled.div<{ theme: ThemeType }>`
  width: 100%;

  > div {
    margin-bottom: 50px;
  }

  .welcome {
    max-width: 600px;
    margin-left: 20px;
  }

  .homeNav {
    margin: 0 auto 50px auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.lightAccent};
    border-radius: 8px;
    text-align: center;

    button {
      margin: 50px 0;
    }
  }

  .demo {
    h2 {
      margin-left: 20px;
    }
  }

  p {
    padding: 5px;
  }
`;
