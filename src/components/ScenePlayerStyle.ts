import styled from "styled-components";

export const ScenePlayerStyle = styled.div.attrs(
  (props: { background: string }) => ({
    style: {
      backgroundColor: props.background,
    },
  })
)<{ background: string }>`
  display: flex;
  justify-content: space-around;
  border-radius: 8px;
`;
