import styled from "styled-components";

export const ScriptPhraseWrapper = styled.div<{
  position: "LEFT" | "MIDDLE" | "RIGHT";
}>`
  background-color: white;
  width: 95%;
  margin: 5px 0;
  padding: 5px;
  border-radius: 10px;
  ${({ position }) =>
    position === "LEFT"
      ? "margin-right: 5%;"
      : position === "RIGHT"
      ? "margin-left: 5%;"
      : "margin: 5px auto;"}
`;
