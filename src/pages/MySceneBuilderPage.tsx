import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  AboutDescriptionEditStyle,
  Button,
  PageTitle,
} from "../general-styles/styledElements";
import { selectUserSceneById } from "../store/user/selectors";
import ScenePlayer from "../components/ScenePlayer";
import { ActorType, Phrase } from "../store/types";
import ScriptPhrase from "../components/ScriptPhrase";
import AddPhraseForm from "../components/AddPhraseForm";

// still need to fix not logged in situation, jwt expired etc
export default function MySceneBuilderPage() {
  // const dispatch = useDispatch();
  const sceneId = Number(useParams<{ id: string }>().id);
  const scene = useSelector(selectUserSceneById(sceneId));
  const [actors, setActors] = useState<ActorType[]>([]);
  const [script, setScript] = useState<Phrase[]>([]);
  const actorText = useRef("");

  const [sceneName, setSceneName] = useState("");
  const sceneNameInputRef = useRef<HTMLInputElement>(null);
  const [sceneDescription, setSceneDescription] = useState("");
  const descriptionTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [edit, setEdit] = useState({ title: false, description: false });

  useEffect(() => {
    if (scene) {
      const phrases = scene.actors
        .flatMap((actor) => (actor.phrases ? actor.phrases : []))
        ?.sort((a, b) => (a && b ? a.index - b.index : 0));

      setScript(phrases);
      setActors(scene.actors);
      setSceneName(scene.name);
      setSceneDescription(scene.description ? scene.description : "");
    }
  }, [scene]);

  useEffect(() => {
    if (sceneNameInputRef.current) {
      sceneNameInputRef.current.focus();
      sceneNameInputRef.current.selectionStart = sceneNameInputRef.current.selectionEnd =
        sceneNameInputRef.current.value.length;
    }
    if (descriptionTextareaRef.current) {
      descriptionTextareaRef.current.focus();
      descriptionTextareaRef.current.selectionStart = descriptionTextareaRef.current.selectionEnd =
        descriptionTextareaRef.current.value.length;
    }
  }, [edit]);

  if (!scene || actors.length === 0) return <p>Loading or whatever..</p>; // change this ;)

  const playScene = (script: Phrase[]) => {
    if (script.length > 0) {
      const text = script[0].text;
      actorText.current = "";
      for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
          // mouth.textContent = i % 5 === 0 ? "O" : "o";
          actorText.current += text[i];
          setActors(
            actors.map((actor) => {
              if (actor.id !== script[0].actorId) {
                return { ...actor, currentText: "" };
              } else {
                return { ...actor, currentText: actorText.current };
              }
            })
          );
        }, 50 * i);
      }

      setTimeout(() => {
        // mouth.textContent = "o";
        playScene(script.slice(1));
      }, 1000 + 50 * text.length);
    } else {
      setActors(actors.map((actor) => ({ ...actor, currentText: "" })));
    }
  };

  const addPhrase = (id: number, actorId: number, text: string) => {
    setScript([...script, { id, actorId, index: script.length - 1, text }]);
  };

  const deletePhrase = (id: number) => {
    setScript(script.filter((phrase) => phrase.id !== id));
  };

  const movePhrase = (currentIndex: number, direction: "UP" | "DOWN") => {
    setScript(
      script.map((phrase, i, arr) => {
        if (direction === "UP" && currentIndex !== 0) {
          if (i === currentIndex) return { ...arr[i - 1], index: i };
          else if (i === currentIndex - 1)
            return { ...arr[currentIndex], index: i };
          else return phrase;
        } else if (direction === "DOWN" && currentIndex !== script.length - 1) {
          if (i === currentIndex) return { ...arr[i + 1], index: i };
          else if (i === currentIndex + 1)
            return { ...arr[currentIndex], index: i };
          else return phrase;
        } else {
          return phrase;
        }
      })
    );
  };

  return (
    <div>
      <PageTitle>
        {edit.title && (
          <div>
            <input
              value={sceneName}
              onChange={(e) => setSceneName(e.target.value)}
              ref={sceneNameInputRef}
            ></input>
            <Button onClick={() => setEdit({ ...edit, title: false })}>
              OK
            </Button>
          </div>
        )}
        {!edit.title && (
          <div>
            {sceneName}{" "}
            <Button onClick={() => setEdit({ ...edit, title: true })}>
              Edit
            </Button>
          </div>
        )}
      </PageTitle>
      <div className="pageRow">
        <AboutDescriptionEditStyle>
          <h2>
            Description{" "}
            {edit.description ? (
              <Button onClick={() => setEdit({ ...edit, description: false })}>
                OK
              </Button>
            ) : (
              <Button onClick={() => setEdit({ ...edit, description: true })}>
                {sceneDescription ? "Edit" : "Add"}
              </Button>
            )}
          </h2>
          {edit.description ? (
            <textarea
              value={sceneDescription}
              onChange={(e) => setSceneDescription(e.target.value)}
              ref={descriptionTextareaRef}
            ></textarea>
          ) : (
            <p>{sceneDescription}</p>
          )}
        </AboutDescriptionEditStyle>
      </div>
      <div className="pageRow">
        <ScenePlayer actors={actors} />
      </div>
      <div className="pageRow">
        <Button center onClick={() => playScene(script)}>
          Play
        </Button>
      </div>
      <div className="pageRow">
        {script.map((phrase) => {
          const actor = actors.find((actor) => actor.id === phrase.actorId);

          const actorPosition =
            scene.actors.length === 1
              ? "MIDDLE"
              : actor && actors.indexOf(actor) === 0
              ? "LEFT"
              : "RIGHT";

          return (
            <ScriptPhrase
              key={phrase.id}
              id={phrase.id}
              index={phrase.index}
              text={phrase.text}
              actorName={actor?.name}
              actorPosition={actorPosition}
              deletePhrase={deletePhrase}
              movePhrase={movePhrase}
            />
          );
        })}
      </div>
      <div className="pageRow">
        <AddPhraseForm addPhrase={addPhrase} actors={actors} />
      </div>
    </div>
  );
}

/*
      // document.getElementById("startButton").style.visibility = "hidden";
      // if (script.length === 1) {
      //   setTimeout(() => {
      //     document.getElementById("startButton").style.visibility = "visible";
      //   }, 1000 + 50 * text.length);
      // }

  */
