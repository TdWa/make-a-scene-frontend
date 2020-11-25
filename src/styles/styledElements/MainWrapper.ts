import styled from "styled-components";
import { ThemeType } from "../theme";

export const MainWrapper = styled.main<{ theme: ThemeType }>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.main};
  min-height: 60vh;
`;
