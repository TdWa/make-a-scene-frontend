import React from "react";
import Actor from "../components/Actor";
import { ActorsToCreate } from "../pages/MyNewScenePage";

type ActorCreaterProp = {
  actors: ActorsToCreate;
  selectActor: (type: "male" | "female") => void;
  editActorColors: (
    property: "color" | "backgroundColor",
    color: string
  ) => void;
  editActorName: (name: string) => void;
};

export default function ActorCreater(props: ActorCreaterProp) {
  const { actors, selectActor, editActorColors, editActorName } = props;
  return (
    <div>
      <h3>Actor 1</h3>
      <select
        defaultValue={"Select"}
        onChange={(e) => {
          if (e.target.value === "male" || e.target.value === "female") {
            selectActor(e.target.value);
          }
        }}
      >
        <option disabled>Select</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      {actors.actor1 && <Actor {...actors.actor1} />}
      {actors.actor1 && (
        <div>
          <div>
            <input
              type="color"
              value={actors.actor1.backgroundColor}
              onChange={(e) =>
                editActorColors("backgroundColor", e.target.value)
              }
            />
          </div>

          <div>
            <input
              type="color"
              value={actors.actor1.color}
              onChange={(e) => editActorColors("color", e.target.value)}
            />
          </div>

          <div>
            <input
              value={actors.actor1.name}
              onChange={(e) => editActorName(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
