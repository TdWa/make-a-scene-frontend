import styled from "styled-components";

export const HomePageStyle = styled.div`
  width: 100%;

  > div {
    margin-bottom: 50px;
  }

  .welcome {
    max-width: 600px;
    margin-left: 20px;
  }

  .homeNav {
    margin: 0 auto 50px auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    text-align: center;

    button {
      margin: 50px 0;
    }
  }

  .demo {
    h2 {
      margin-left: 20px;
    }
  }

  p {
    padding: 5px;
  }
`;
