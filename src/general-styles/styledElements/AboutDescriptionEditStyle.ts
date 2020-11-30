import styled from "styled-components";

export const AboutDescriptionEditStyle = styled.div`
  display: flex;
  flex-direction: column;

  p,
  textarea {
    width: 500px;
    padding: 5px;
    border: none;
    font-size: 1rem;
  }

  textarea {
    height: 150px;
    resize: vertical;
  }

  div {
    display: flex;
  }
`;
