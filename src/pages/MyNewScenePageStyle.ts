import styled from "styled-components";

export const MyNewScenePageStyle = styled.div`
  > div {
    margin: 20px 10px;
  }

  p {
    margin-left: 15px;
  }

  input,
  select {
    width: 200px;
    padding: 3px;
  }

  .actorCreaterContainer {
    position: relative;
    display: flex;
    margin-left: 5px;

    .actorNameInput {
      margin-bottom: 40px;
    }
  }

  .actorCreater {
    margin-right: 20px;

    p {
      margin: 15px 0 3px 0;
    }
  }

  .backgroundInput {
    display: flex;
    margin: 20px 20px 20px 5px;

    p {
      margin: 3px 0;
    }

    > div {
      width: 420px;
    }
  }

  button {
    align-self: flex-end;
  }
`;
