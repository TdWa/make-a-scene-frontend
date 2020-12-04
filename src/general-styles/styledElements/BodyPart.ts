import styled from "styled-components";

type BodyPartProp = {
  backgroundColor?: string;
  color?: string;
  borderBottom?: string;
};

export const BodyPart = styled.div.attrs((props: BodyPartProp) => ({
  style: {
    backgroundColor: props.backgroundColor,
    color: props.color,
    borderBottom: `${
      props.borderBottom && `100px solid ${props.borderBottom}`
    }`,
  },
}))<BodyPartProp>`
  position: absolute;
  z-index: 97;
`;
