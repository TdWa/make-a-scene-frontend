import React from "react";
import Actor from "./Actor";
import SpeechBox from "./SpeechBox";
import { ActorType } from "../store/types";
import { ScenePlayerStyle } from "./ScenePlayerStyle";

type ScenePlayerProp = {
  actors: ActorType[];
  background: string;
};

export default function ScenePlayer(props: ScenePlayerProp) {
  const { actors, background } = props;
  return (
    <ScenePlayerStyle background={background}>
      {actors.map((actor) => (
        <div key={actor.id}>
          <SpeechBox currentText={actor.currentText} />
          <Actor {...actor} scenePlayer />
        </div>
      ))}
    </ScenePlayerStyle>
  );
}
