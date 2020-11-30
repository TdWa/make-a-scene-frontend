import styled from "styled-components";

export const ConfirmPopup = styled.div`
  position: fixed;
  background-color: lightgray;
  width: 300px;
  height: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
`;
