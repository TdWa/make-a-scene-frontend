import React, { useState, useEffect } from "react";
import { apiUrl } from "../config/constants";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  AboutDescriptionEditStyle,
  PageFeedback,
  PageTitle,
} from "../general-styles/styledElements";
import SceneListCard from "../components/SceneListCard";
import { ActorType, Scene } from "../store/types";

export default function AuthorPage() {
  const params = useParams<{ id: string }>();
  const authorId = Number(params.id);

  // doing this here in local state as experiment and because I only use it for this page
  type AuthorState = {
    loading: boolean;
    message: null;
    author: {
      id: number;
      name: string;
      about: string | null;
      scenes: Scene[];
    } | null;
  };

  const initialState = {
    loading: false,
    message: null,
    author: null,
  };

  const [authorState, setAuthorState] = useState<AuthorState>(initialState);

  useEffect(() => {
    (async () => {
      try {
        setAuthorState((previousState) => ({
          ...previousState,
          loading: true,
        }));
        const response = await axios.get(`${apiUrl}/users/${authorId}`);

        // Sort the scenes and actors by Id so they always stay in the same order
        response.data.scenes
          .sort((a: Scene, b: Scene) => (a.id && b.id ? a.id - b.id : 0))
          .map((scene: Scene) =>
            scene.actors.sort((a: ActorType, b: ActorType) =>
              a.id && b.id ? a.id - b.id : 0
            )
          );

        setAuthorState((previousState) => ({
          ...previousState,
          loading: false,
          author: response.data,
        }));
      } catch (error) {
        if (error.response?.data?.message) {
          console.log(error.response.data.message);
          setAuthorState((previousState) => ({
            ...previousState,
            loading: false,
            message: error.response.data.message,
          }));
        } else {
          console.log(error.message);
          setAuthorState((previousState) => ({
            ...previousState,
            loading: false,
            message: error.message,
          }));
        }
      }
    })();
  }, [authorId]);

  if (!authorState.author) {
    if (authorState.message) {
      return <PageFeedback>{authorState.message}</PageFeedback>;
    } else {
      return <PageFeedback>Loading...</PageFeedback>;
    }
  }

  return (
    <div>
      <PageTitle>{authorState.author.name}</PageTitle>
      {authorState.author.about && (
        <div className="pageRow">
          <AboutDescriptionEditStyle>
            <h2>About</h2>
            <p>{authorState.author.about}</p>
          </AboutDescriptionEditStyle>
        </div>
      )}
      <div className="pageRow">
        <h2>Scenes</h2>
        {authorState.author.scenes.map((scene) => (
          <SceneListCard key={scene.id} authorPage={true} {...scene} />
        ))}
      </div>
    </div>
  );
}
