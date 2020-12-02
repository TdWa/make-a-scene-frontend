import styled from "styled-components";
import { ThemeType } from "../general-styles/theme";

export const FooterStyle = styled.footer<{ theme: ThemeType }>`
  background-color: black;
  color: white;
  height: 50px;
  margin-top: 60px;

  > div {
    height: 100%;
    max-width: ${({ theme }) => theme.widths.maxPageWidth};
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    p {
      margin-right: 70px;
    }
  }
`;
