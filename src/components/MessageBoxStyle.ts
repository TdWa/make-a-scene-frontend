import styled from "styled-components";

export const MessageBoxWrapper = styled.div<{ type: "positive" | "negative" }>`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: ${({ type }) => (type === "positive" ? "green" : "red")};
  position: absolute;
  text-align: center;
  border-radius: 0 0 8px 8px;

  button {
    min-width: 20px;
  }
`;
