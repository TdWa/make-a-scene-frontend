import React from "react";
import Actor from "../components/Actor";
import { ActorType } from "../store/types";

type ActorCreaterProp = {
  number: 1 | 2;
  actor: ActorType | null;
  selectActor: (actor: 1 | 2, type: "man" | "woman" | "select") => void;
  editActorColors: (
    actor: 1 | 2,
    property: "color" | "backgroundColor",
    color: string
  ) => void;
  editActorName: (actor: 1 | 2, name: string) => void;
};

export default function ActorCreater(props: ActorCreaterProp) {
  const { number, actor, selectActor, editActorColors, editActorName } = props;
  return (
    <div className="actorCreater">
      <h3>Actor {number}</h3>
      <div>
        <p>Type:</p>
        <select
          defaultValue={"select"}
          onChange={(e) => {
            if (
              e.target.value === "man" ||
              e.target.value === "woman" ||
              e.target.value === "select"
            ) {
              selectActor(number, e.target.value);
            }
          }}
        >
          <option value="select">select</option>
          <option value="man">man</option>
          <option value="woman">woman</option>
        </select>
      </div>
      {actor && (
        <div>
          <div className="actorNameInput">
            <p>Name:</p>
            <input
              value={actor.name}
              onChange={(e) => editActorName(number, e.target.value)}
              placeholder="Actor name"
              required
            />
          </div>
          <Actor {...actor} position={number === 1 ? "left" : "right"} />
          <div>
            <p>Body color:</p>
            <input
              type="color"
              value={actor.backgroundColor}
              onChange={(e) =>
                editActorColors(number, "backgroundColor", e.target.value)
              }
            />
          </div>
          <div>
            <p>Text color:</p>
            <input
              type="color"
              value={actor.color}
              onChange={(e) => editActorColors(number, "color", e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
