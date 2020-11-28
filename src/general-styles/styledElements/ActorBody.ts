import styled from "styled-components";

// props.bg.backgroundColor

type ActorBodyProps = {
  bg: string;
  color: string;
};

export const ActorBody = styled.div.attrs((props: ActorBodyProps) => ({
  style: {
    backgroundColor: props.bg,
    color: props.color,
  },
}))<{ bg: string }>`
  position: relative;
  width: 70%;
  height: 70%;
  border: 1px solid black;
`;
