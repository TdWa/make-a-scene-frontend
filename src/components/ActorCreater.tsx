import React from "react";
import Actor from "../components/Actor";
import { ActorType } from "../store/types";

type ActorCreaterProp = {
  number: 1 | 2;
  actor: ActorType | null;
  selectActor: (actor: 1 | 2, type: "male" | "female") => void;
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
          defaultValue={"Select"}
          onChange={(e) => {
            if (e.target.value === "male" || e.target.value === "female") {
              selectActor(number, e.target.value);
            }
          }}
        >
          <option disabled>Select</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>
      {actor && (
        <div>
          <div>
            <p>Name:</p>
            <input
              value={actor.name}
              onChange={(e) => editActorName(number, e.target.value)}
              placeholder="Actor name"
              required
            />
          </div>
          <Actor {...actor} />
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
