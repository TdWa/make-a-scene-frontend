import styled from "styled-components";

export const ScenePlayerStyle = styled.div<{ background: string }>`
  display: flex;
  background-color: ${({ background }) => background};
  justify-content: space-around;
  border-radius: 8px;
`;
