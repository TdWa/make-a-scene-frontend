import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, PageTitle } from "../general-styles/styledElements";
import { selectSceneById } from "../store/authors/selectors";
import { getScenes } from "../store/authors/actions";
import ScenePlayer from "../components/ScenePlayer";
import { ActorType, Phrase } from "../store/types";
import { playScene } from "../functions";

export default function ViewScenePage() {
  const dispatch = useDispatch();
  const params = useParams<{ id: string }>();
  const sceneId = Number(params.id);
  const scene = useSelector(selectSceneById(sceneId));
  const [script, setScript] = useState<Phrase[]>([]);
  const [actors, setActors] = useState<ActorType[]>([]);
  const actorText = useRef("");

  useEffect(() => {
    if (!scene) {
      dispatch(getScenes);
    } else {
      const phrases = scene.actors
        .flatMap((actor) => (actor.phrases ? actor.phrases : []))
        .sort((a, b) => (a && b ? a.index - b.index : 0));

      setScript(phrases);
      setActors(scene.actors);
    }
  }, [scene, dispatch]);

  if (!scene) return null; // should be some kind of loading indicator

  return (
    <div>
      <PageTitle>{scene.name}</PageTitle>
      <ScenePlayer actors={actors} />
      <div className="pageRow">
        <Button
          center
          onClick={() => playScene(script, actors, actorText, setActors)}
        >
          Play
        </Button>
      </div>
      {scene.description && (
        <div className="pageRow">
          <h2>Description</h2>
          <p>{scene.description}</p>
        </div>
      )}
    </div>
  );
}
