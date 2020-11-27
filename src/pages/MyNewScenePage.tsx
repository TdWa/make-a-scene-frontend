import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, PageTitle } from "../general-styles/styledElements";
import { ActorsToCreate } from "../store/types";
import ActorCreater from "../components/ActorCreater";
import { MyNewScenePageStyle } from "./MyNewScenePageStyle";
import { createNewScene } from "../store/user/actions";
import { selectUserScenes } from "../store/user/selectors";
import { useHistory } from "react-router-dom";

export default function MyNewScenePage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [hideButton, setHideButton] = useState(false);
  const [actors, setActors] = useState<ActorsToCreate>({
    actor1: null,
    actor2: null,
  });
  const userScenes = useSelector(selectUserScenes);
  const initialScenesAmount = useRef(userScenes.length);
  const history = useHistory();

  useEffect(() => {
    if (userScenes.length === initialScenesAmount.current + 1) {
      const sceneId = userScenes[userScenes.length - 1].id;
      history.push(`/myScenes/${sceneId}`);
    }
  }, [userScenes, history, initialScenesAmount]);

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(createNewScene(name, actors));
    setHideButton(true);
  }

  const selectActor = (actor: 1 | 2, type: "male" | "female"): void => {
    if (actor === 1) {
      setActors({
        actor1: {
          type: type === "male" ? "male" : "female",
          name: "",
          backgroundColor: "#31c5ff",
          color: "#000000",
        },
        actor2: actors.actor2,
      });
    } else {
      setActors({
        actor2: {
          type: type === "male" ? "male" : "female",
          name: "",
          backgroundColor: "#ffee00",
          color: "#000000",
        },
        actor1: actors.actor1,
      });
    }
  };

  const editActorColors = (
    actor: 1 | 2,
    property: "color" | "backgroundColor",
    color: string
  ): void => {
    if (actor === 1 && actors.actor1) {
      if (property === "color") {
        setActors({
          actor1: {
            ...actors.actor1,
            color: color,
          },
          actor2: actors.actor2,
        });
      } else {
        setActors({
          actor1: {
            ...actors.actor1,
            backgroundColor: color,
          },
          actor2: actors.actor2,
        });
      }
    } else if (actor === 2 && actors.actor2) {
      if (property === "color") {
        setActors({
          actor2: {
            ...actors.actor2,
            color: color,
          },
          actor1: actors.actor1,
        });
      } else {
        setActors({
          actor2: {
            ...actors.actor2,
            backgroundColor: color,
          },
          actor1: actors.actor1,
        });
      }
    }
  };

  const editActorName = (actor: 1 | 2, name: string): void => {
    if (actor === 1 && actors.actor1) {
      setActors({
        actor1: {
          ...actors.actor1,
          name: name,
        },
        actor2: actors.actor2,
      });
    } else if (actor === 2 && actors.actor2) {
      setActors({
        actor2: {
          ...actors.actor2,
          name: name,
        },
        actor1: actors.actor1,
      });
    }
  };

  // MAYBE CHANGE STYLING AND HTML STRUCTURE WITH THE FORM.. :D
  return (
    <form onSubmit={submitForm}>
      <MyNewScenePageStyle>
        <PageTitle>Let's make a scene!</PageTitle>
        <div>
          <h2>Choose a name</h2>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Scene name"
            required
          ></input>
        </div>
        <div>
          <h2>Choose actors</h2>
          <div className="actorCreaterContainer">
            <ActorCreater
              number={1}
              actor={actors.actor1}
              selectActor={selectActor}
              editActorColors={editActorColors}
              editActorName={editActorName}
            />
            {actors.actor1 && (
              <ActorCreater
                number={2}
                actor={actors.actor2}
                selectActor={selectActor}
                editActorColors={editActorColors}
                editActorName={editActorName}
              />
            )}
            {actors.actor1 && !hideButton && <Button>Next</Button>}
          </div>
        </div>
        <p>
          You can always change things later! (If I have time to implement that
          feature ;))
        </p>
      </MyNewScenePageStyle>
    </form>
  );
}
