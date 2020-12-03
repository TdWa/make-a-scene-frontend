import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ScenePlayer from "../components/ScenePlayer";
import { playScene } from "../functions";
import {
  Button,
  PageTitle,
  StyledLink,
} from "../general-styles/styledElements";
import { ActorType } from "../store/types";
import { selectUser } from "../store/user/selectors";
import { HomePageStyle } from "./HomePageStyle";
import { demoScript, demoActors, demoBackground } from "./HomePageDemoScene";

export default function HomePage() {
  const user = useSelector(selectUser);
  const [actors, setActors] = useState<ActorType[]>(demoActors);
  const actorText = useRef("");
  const [playable, setPlayable] = useState(true);
  const timeoutRefs = useRef<number[]>([]);

  useEffect(() => {
    const allTimeouts = timeoutRefs.current;
    return () => allTimeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

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
          <div className="pageRow">
            <h2>Demo</h2>
            <ScenePlayer actors={actors} background={demoBackground} />
          </div>
          <div className="pageRow">
            {playable && (
              <Button
                center
                onClick={() => {
                  playScene(
                    demoScript,
                    actors,
                    actorText,
                    setActors,
                    setPlayable,
                    timeoutRefs
                  );
                  setPlayable(false);
                }}
              >
                Play
              </Button>
            )}
          </div>
        </div>
      )}
    </HomePageStyle>
  );
}
