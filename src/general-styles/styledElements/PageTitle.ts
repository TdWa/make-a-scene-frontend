import styled from "styled-components";

export const PageTitle = styled.h1`
  text-align: center;
  padding: 50px 0;

  input {
    min-width: 200px;
    width: 60%;
    font-size: 2rem;
    font-weight: bold;
    animation: expand 0.3s ease;
  }

  @keyframes expand {
    0% {
      width: 200px;
    }
    100% {
      width: 60%;
    }
  }
`;
