import React from "react";
import Actor from "./Actor";
import SpeechBox from "./SpeechBox";
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
        <div key={actor.id}>
          <SpeechBox currentText={actor.currentText} />
          <Actor {...actor} />
        </div>
      ))}
    </ScenePlayerStyle>
  );
}
