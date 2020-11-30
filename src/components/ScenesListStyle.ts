import styled from "styled-components";

export const ScenesListStyle = styled.div`
  position: relative;
  background-color: lightblue;
  margin: 20px auto;
  border-radius: 5px;
  padding: 10px;

  h3 {
    margin: 5px;
    text-align: center;
  }

  > div {
    display: flex;
    flex-wrap: wrap;

    > div {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      min-width: 300px;
    }
  }

  .delete {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  /* .description {
    position: absolute;
    top: 10px;
    left: 10px;
  } */
`;
