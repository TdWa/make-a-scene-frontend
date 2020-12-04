import React from "react";
import { ActorType } from "../store/types";
import { SceneSettingsEditorStyle } from "./SceneSettingsEditorStyle";

type SceneSettingsEditorProp = {
  actors: ActorType[];
  editActorColors: (
    actorId: number,
    property: "color" | "backgroundColor",
    color: string
  ) => void;
  editActorName: (actorId: number, name: string) => void;
  backgroundColor: string;
  editBackgroundColor: (color: string) => void;
};

export default function SceneSettingsEditor(props: SceneSettingsEditorProp) {
  const {
    actors,
    editActorColors,
    editActorName,
    backgroundColor,
    editBackgroundColor,
  } = props;

  return (
    <SceneSettingsEditorStyle>
      <div>
        <p>Background Color:</p>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => editBackgroundColor(e.target.value)}
        />
      </div>
      {actors.map((actor, i) => (
        <div key={actor.id}>
          <div>
            <h3>Actor {i + 1}</h3>
          </div>
          <div>
            <p>Name:</p>
            <input
              value={actor.name}
              onChange={(e) => {
                if (actor.id) editActorName(actor.id, e.target.value);
              }}
              placeholder="Actor name"
              required
            />
          </div>
          <div>
            <p>Body color:</p>
            <input
              type="color"
              value={actor.backgroundColor}
              onChange={(e) => {
                if (actor.id)
                  editActorColors(actor.id, "backgroundColor", e.target.value);
              }}
            />
          </div>
          <div>
            <p>Text color:</p>
            <input
              type="color"
              value={actor.color}
              onChange={(e) => {
                if (actor.id)
                  editActorColors(actor.id, "color", e.target.value);
              }}
            />
          </div>
        </div>
      ))}
    </SceneSettingsEditorStyle>
  );
}
