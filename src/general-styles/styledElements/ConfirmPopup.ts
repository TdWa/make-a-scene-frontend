import styled from "styled-components";

export const ConfirmPopup = styled.div`
  position: fixed;
  background-color: lightgray;
  width: 300px;
  height: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 99;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;
