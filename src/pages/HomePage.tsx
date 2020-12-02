import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ScenePlayer from "../components/ScenePlayer";
import { playScene } from "../functions";
import {
  Button,
  PageTitle,
  StyledLink,
} from "../general-styles/styledElements";
import { getScenes } from "../store/authors/actions";
import { selectSceneById } from "../store/authors/selectors";
import { ActorType, Phrase } from "../store/types";
import { selectUser } from "../store/user/selectors";
import { HomePageStyle } from "./HomePageStyle";

export default function HomePage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const scene = useSelector(selectSceneById(1));
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

  return (
    <HomePageStyle>
      <PageTitle>Make a Scene</PageTitle>
      <div className="welcome">
        <h2>Welcome</h2>
        <p>
          Make a Scene is a platform for creating, sharing and discussing
          conversation scenes. You can create animated scripts and watch our
          actors make your ideas come to life. Go to Discover Scenes to see the
          work of other authors, or sign up and create your own!
        </p>
      </div>
      <div className="homeNav">
        <Link to="/scenes">
          <Button>Discover Scenes</Button>
        </Link>
        {user.name ? (
          <Link to="/myScenes/new">
            <Button>Let's Make a Scene!</Button>
          </Link>
        ) : (
          <div>
            <p>
              <StyledLink to="/login">Log in</StyledLink> or
              <StyledLink to="/signup"> Sign up</StyledLink>
            </p>
            <p>to create your own scene!</p>
          </div>
        )}
      </div>
      {actors.length !== 0 && (
        <div className="demo">
          <h2>Demo</h2>
          <ScenePlayer actors={actors} />
          <div className="pageRow">
            <Button
              center
              onClick={() => playScene(script, actors, actorText, setActors)}
            >
              Play
            </Button>
          </div>
        </div>
      )}
    </HomePageStyle>
  );
}
