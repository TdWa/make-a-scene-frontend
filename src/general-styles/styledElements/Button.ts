import styled, { css } from "styled-components";
import { ThemeType } from "../theme";

type ButtonProp = {
  center?: boolean;
  right?: boolean;
  invert?: boolean;
  theme: ThemeType;
};

export const Button = styled.button<ButtonProp>`
  min-width: 60px;
  height: 30px;
  margin: ${({ center }) => (center ? "0 auto" : "0")};
  ${({ center }) => center && "display: block;"}
  padding: 0 10px;
  font-size: 1rem;
  background-color: ${({ invert }) => (invert ? "white" : "black")};
  color: ${({ invert }) => (invert ? "black" : "white")};
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${({ invert, theme }) =>
      invert ? theme.colors.lightAccent : "#01135c"};
    cursor: pointer;
    transform: scale(1.03);
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    border: 2px solid blue;
  }

  ${({ right }) =>
    right &&
    css`
      background-color: darkgreen;
      position: absolute;
      top: 150px;
      right: 10px;
    `}
`;
