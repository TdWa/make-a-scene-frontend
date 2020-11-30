import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  background-color: lightblue;

  nav {
    margin: 0 auto;
    display: flex;
    height: 50px;
    width: 100%;
    max-width: 900px;

    > div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  a {
    color: black;
    text-decoration: none;
  }

  .active {
    font-weight: bold;
  }
`;
