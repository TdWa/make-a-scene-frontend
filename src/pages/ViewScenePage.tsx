import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  PageTitle,
  StyledLink,
} from "../general-styles/styledElements";
import { selectSceneById } from "../store/authors/selectors";
import { getScenes } from "../store/authors/actions";
import ScenePlayer from "../components/ScenePlayer";
import Comment from "../components/Comment";
import { ActorType, Phrase } from "../store/types";
import { playScene } from "../functions";
import { ViewScenePageStyle } from "./ViewScenePageStyle";
import { selectUser } from "../store/user/selectors";
import { createComment } from "../store/authors/actions";

export default function ViewScenePage() {
  const dispatch = useDispatch();
  const params = useParams<{ id: string }>();
  const sceneId = Number(params.id);
  const scene = useSelector(selectSceneById(sceneId));
  const [script, setScript] = useState<Phrase[]>([]);
  const [actors, setActors] = useState<ActorType[]>([]);
  const actorText = useRef("");
  const [newComment, setNewComment] = useState("");
  const user = useSelector(selectUser);

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
    <ViewScenePageStyle>
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
      <div className="pageRow">
        <h2>Comments</h2>
        {scene.comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
      {user.name ? (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            if (user.id) {
              dispatch(
                createComment({ sceneId, userId: user.id, text: newComment })
              );
            }
            setNewComment("");
          }}
        >
          <div className="wide">
            <textarea
              onChange={(e) => setNewComment(e.target.value)}
              value={newComment}
              placeholder="Add a comment"
              required
            ></textarea>
          </div>
          <div>
            <Button>Add</Button>
          </div>
        </Form>
      ) : (
        <p>
          <StyledLink to="/login">Log in</StyledLink> to add a comment
        </p>
      )}
    </ViewScenePageStyle>
  );
}
