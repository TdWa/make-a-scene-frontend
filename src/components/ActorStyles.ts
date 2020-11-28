import styled from "styled-components";

export const ActorWrapper = styled.div`
  width: 200px;
  height: 300px;
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

type ActorBodyProps = {
  bg: string;
  color: string;
};

export const ActorBody = styled.div.attrs((props: ActorBodyProps) => ({
  style: {
    backgroundColor: props.bg,
    color: props.color,
  },
}))<{ bg: string; color: string }>`
  position: relative;
  width: 70%;
  height: 70%;
  border: 1px solid black;
`;
