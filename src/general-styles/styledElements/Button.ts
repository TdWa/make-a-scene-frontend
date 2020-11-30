import styled, { css } from "styled-components";

type ButtonPropType = {
  center?: boolean;
  save?: boolean;
};

export const Button = styled.button<ButtonPropType>`
  min-width: 60px;
  height: 30px;
  margin: ${({ center }) => (center ? "0 auto" : "0")};
  ${({ center }) => center && "display: block;"}
  padding: 0 10px;
  font-size: 1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #404040;

  &:hover {
    background-color: #01135c;
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
    box-shadow: none;
  }

  ${({ save }) =>
    save &&
    css`
      background-color: darkgreen;
      position: absolute;
      top: 150px;
      right: 10px;
    `}
`;
