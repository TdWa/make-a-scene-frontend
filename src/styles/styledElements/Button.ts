import styled from "styled-components";

export const Button = styled.button`
  min-width: 70px;
  height: 35px;
  font-size: 1rem;
  padding: 5px 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #404040;

  &:hover {
    background-color: #01135c;
    cursor: pointer;
    transform: scale(1.03);
  }

  &:active {
    transform: translateY(1px);
  }
`;
