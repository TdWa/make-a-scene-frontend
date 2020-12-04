import styled from "styled-components";

type AbsoluteDivProp = {
  backgroundColor: string;
  twoActors: boolean;
};

export const AbsoluteDiv = styled.div.attrs((props: AbsoluteDivProp) => ({
  style: {
    backgroundColor: props.backgroundColor,
  },
}))<AbsoluteDivProp>`
  position: absolute;
  width: ${({ twoActors }) => (twoActors ? "420px" : "200px")};
  height: 299px;
  top: 165px;
  border-radius: 8px;
  z-index: -1;
`;
