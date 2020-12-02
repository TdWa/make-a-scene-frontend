import styled from "styled-components";
import { ThemeType } from "../theme";

export const MainWrapper = styled.main<{ theme: ThemeType }>`
  max-width: ${({ theme }) => theme.widths.maxPageWidth};
  margin: 0 auto;
  padding-bottom: 60px;
  position: relative;
  min-height: calc(100vh - 100px);
`;
