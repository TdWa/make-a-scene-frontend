import styled from "styled-components";
// prettier-ignore
export const ScriptPhraseWrapper = styled.div<{position: "LEFT" | "MIDDLE" | "RIGHT"}>`
  position: relative;
  min-height: 60px;
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

  p, input {
    position: relative;
    display: block;
    left: 40px;
    width: calc(95% - 70px);
    font-size: 1rem;
    border: none;
    padding: 3px;
  }

  .deletePhrase, .editPhrase, .movePhraseDown, .movePhraseUp {
    height: 25px;
    background-color: black;
    color: white;
    position: absolute;
    border: none;
  }

  button:hover {
    background-color: #01135c;
    cursor: pointer;
    transform: scale(1.03);
  }

  button:active {
    transform: scale(1);
  }

  button:focus {
    outline: none;
  }

  button:focus-visible {
    border: 2px solid blue;
    box-shadow: none;
  }

  .deletePhrase {
    width: 60px;
    top: 0;
    right: 0;
    border-radius: 0 8px 0 8px;
  }

  .editPhrase {
    width: 60px;
    bottom: 0;
    right: 0;
    border-radius: 8px 0 8px 0;
  }

  .movePhraseUp {
    width: 30px;
    left: 0;
    top: 0;
    border-radius: 8px 0 8px 0;

  }

  .movePhraseDown {
    width: 30px;
    left: 0;
    bottom: 0;
    border-radius: 0 8px 0 8px;

  }
`;
