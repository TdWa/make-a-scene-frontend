import styled from "styled-components";

export const SceneSettingsEditorStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  > div {
    flex: 1;

    > div {
      margin-bottom: 10px;
    }
  }

  input {
    width: 85%;
    min-width: 160px;
    height: 25px;
    padding: 3px;
  }
`;
