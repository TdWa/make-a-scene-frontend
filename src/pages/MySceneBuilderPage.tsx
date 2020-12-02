import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import {
  AboutDescriptionEditStyle,
  Button,
  PageFeedback,
  PageTitle,
} from "../general-styles/styledElements";
import { selectUser, selectUserSceneById } from "../store/user/selectors";
import ScenePlayer from "../components/ScenePlayer";
import { ActorType, Phrase } from "../store/types";
import ScriptPhrase from "../components/ScriptPhrase";
import AddPhraseForm from "../components/AddPhraseForm";
import { updateScene } from "../store/user/actions";
import { playScene } from "../functions";

// still need to fix not logged in situation, jwt expired etc
export default function MySceneBuilderPage() {
  const dispatch = useDispatch();
  const sceneId = Number(useParams<{ id: string }>().id);
  const scene = useSelector(selectUserSceneById(sceneId));
  const [actors, setActors] = useState<ActorType[]>([]);
  const [script, setScript] = useState<Phrase[]>([]);
  const actorText = useRef("");

  const [sceneName, setSceneName] = useState("");
  const sceneNameInputRef = useRef<HTMLInputElement>(null);
  const [sceneDescription, setSceneDescription] = useState("");
  const descriptionTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [edit, setEdit] = useState({
    title: false,
    description: false,
    save: false,
  });

  useEffect(() => {
    if (scene) {
      const phrases = scene.actors
        .flatMap((actor) => (actor.phrases ? actor.phrases : []))
        .sort((a, b) => (a && b ? a.index - b.index : 0));

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

  const user = useSelector(selectUser);

  if (!user.token) {
    // visitor is not logged in
    return <Redirect to={"/"} />;
  } else if (!user.name) {
    // the App.tsx useEffect will go check the token with getUserWithStoredToken (and remove it if it is not valid)
    return <PageFeedback>Loading...</PageFeedback>;
  } else if (!user.scenes.some((scene) => scene.id === sceneId)) {
    // this scene is not of the logged in user
    return <Redirect to={"/"} />;
  } else if (!scene || actors.length === 0) {
    // the scene was not in the store and needs to be fetched OR the actors have not been placed in the local state yet
    return <PageFeedback>Loading...</PageFeedback>;
  }

  const addPhrase = (id: number, actorId: number, text: string) => {
    setScript([...script, { id, actorId, index: script.length, text }]);
  };

  const deletePhrase = (id: number, index: number) => {
    setScript(
      script
        .map((phrase) =>
          phrase.index > index ? { ...phrase, index: phrase.index - 1 } : phrase
        )
        .filter((phrase) => phrase.id !== id)
    );
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

  const editPhrase = (id: number, newText: string) => {
    setScript(
      script.map((phrase) =>
        phrase.id === id ? { ...phrase, text: newText } : phrase
      )
    );
  };

  const setSaveableTrue = () => setEdit({ ...edit, save: true });

  return (
    <div>
      {edit.save && (
        <Button
          right
          onClick={() => {
            const actorIds = actors.flatMap((actor) =>
              actor.id ? actor.id : []
            );
            dispatch(
              updateScene(
                scene.id,
                sceneName,
                sceneDescription,
                script,
                actorIds
              )
            );
            setEdit({ ...edit, save: false });
          }}
        >
          Save all changes
        </Button>
      )}
      <PageTitle>
        {edit.title && (
          <div>
            <input
              value={sceneName}
              onChange={(e) => setSceneName(e.target.value)}
              ref={sceneNameInputRef}
            ></input>
            <Button
              onClick={() => setEdit({ ...edit, title: false, save: true })}
            >
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
              <Button
                onClick={() =>
                  setEdit({ ...edit, description: false, save: true })
                }
              >
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
        <Button
          center
          onClick={() => playScene(script, actors, actorText, setActors)}
        >
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
              editPhrase={editPhrase}
              setSaveableTrue={setSaveableTrue}
            />
          );
        })}
      </div>
      <div className="pageRow">
        <AddPhraseForm
          addPhrase={addPhrase}
          setSaveableTrue={setSaveableTrue}
          actors={actors}
        />
      </div>
    </div>
  );
}
