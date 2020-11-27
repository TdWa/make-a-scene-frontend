import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p,
  textarea {
    width: 500px;
    max-width: 500px;
    padding: 5px;
    border: none;
    font-size: 1rem;
  }

  textarea {
    height: 200px;
  }

  div {
    display: flex;
  }
`;
