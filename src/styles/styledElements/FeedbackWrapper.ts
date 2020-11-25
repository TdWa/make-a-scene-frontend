import styled from "styled-components";

export const FeedbackWrapper = styled.div<{ type: "positive" | "negative" }>`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: ${({ type }) => (type === "positive" ? "green" : "red")};
  position: absolute;
  text-align: center;
`;
