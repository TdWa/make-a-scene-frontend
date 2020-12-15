import styled from "styled-components";
import { ThemeType } from "../general-styles/theme";

type SceneListCardStyleProp = {
  backgroundColor: string;
  profilePage?: boolean;
  theme: ThemeType;
};

export const SceneListCardStyle = styled.div<SceneListCardStyleProp>`
  position: relative;
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin: 20px auto;
  border-radius: 5px;
  padding: 10px;

  h3 {
    margin: 5px;
    text-align: center;
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.3rem;
  }

  > div {
    > div {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .actorContainer {
    min-width: 300px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .sceneLinksContainer {
    min-width: 300px;
    flex: 1;
    display: flex;
    flex-direction: ${({ profilePage }) => (profilePage ? "row" : "column")};
    align-items: center;
    justify-content: space-evenly;
  }

  .sceneLinks {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-width: 300px;
    width: 100%;
    margin: 10px 0;
  }

  .authorName {
    display: flex;
    min-width: 300px;
    width: 100%;
    > div {
      flex: 1;
      text-align: center;
    }
  }

  .sceneDescription {
    background-color: white;
    width: 100%;
    padding: 0;
    border-radius: 0 0 5px 5px;
    height: 0;
    transition: height 0.5s ease;
    transition: padding 0.5s ease;
    overflow: hidden;
  }

  .sceneSimple:hover + .sceneDescription,
  .sceneDescription:hover {
    height: 100px;
    padding: 10px;
    transition: height 0.5s ease;
  }

  .delete {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
