import React from "react";
import Actor from "../components/Actor";
import { Scene } from "../store/types";
import { ScenePlayerStyle } from "./ScenePlayerStyle";

type ScenePlayerProp = {
  scene: Scene;
};

export default function ScenePlayer(props: ScenePlayerProp) {
  const { scene } = props;
  return (
    <ScenePlayerStyle>
      {scene.actors.map((actor) => (
        <Actor key={actor.id} {...actor} />
      ))}
    </ScenePlayerStyle>
  );
}
