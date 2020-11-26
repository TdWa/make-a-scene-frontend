import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Button, PageTitle } from "../styles/styledElements";
import { ActorType } from "../store/types";
import Actor from "../components/Actor";

type ActorsToCreate = {
  actor1: null | ActorType;
  actor2: null | ActorType;
};

export default function MyNewScenePage() {
  // const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [actors, setActors] = useState<ActorsToCreate>({
    actor1: null,
    actor2: null,
  });

  // function submitForm(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   // dispatch(login(email, password));

  //   setName("");
  //   // setActor();
  // }

  return (
    <div>
      <PageTitle>Create a new scene</PageTitle>
      <p>You can always change things later</p>
      <h2>Choose a name</h2>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Awesome scene name"
        required
      ></input>
      <h2>Choose actors</h2>
      <h3>Actor 1</h3>
      <select
        defaultValue={"Select"}
        onChange={(e) => {
          setActors({
            actor1: {
              type: e.target.value === "male" ? "male" : "female",
              name: "name",
              backgroundColor: "#e2dc85",
              color: "#000000",
            },
            actor2: actors.actor2,
          });
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
              onChange={(e) => {
                if (actors.actor1) {
                  setActors({
                    actor1: {
                      ...actors.actor1,
                      backgroundColor: e.target.value,
                    },
                    actor2: actors.actor2,
                  });
                }
              }}
            />
          </div>

          <div>
            <input
              type="color"
              value={actors.actor1.color}
              onChange={(e) => {
                if (actors.actor1) {
                  setActors({
                    actor1: {
                      ...actors.actor1,
                      color: e.target.value,
                    },
                    actor2: actors.actor2,
                  });
                }
              }}
            />
          </div>

          <div>
            <input
              value={actors.actor1.name}
              onChange={(e) => {
                if (actors.actor1) {
                  setActors({
                    actor1: {
                      ...actors.actor1,
                      name: e.target.value,
                    },
                    actor2: actors.actor2,
                  });
                }
              }}
            />
          </div>
        </div>
      )}
      {actors.actor1 && <Button>Next</Button>}
    </div>
  );
}
