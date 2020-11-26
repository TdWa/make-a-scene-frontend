import styled from "styled-components";

export const ActorWrapper = styled.div`
  width: 250px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  .head {
    height: 40%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
  }

  .head div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .moustache {
    transform: rotate(90deg);
  }

  .chest {
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
