import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AboutDescriptionEditStyle,
  PageTitle,
} from "../general-styles/styledElements";
import { selectAuthorScenes } from "../store/authors/selectors";
import { getScenes } from "../store/authors/actions";
import ScenesList from "../components/ScenesList";

export default function AuthorPage() {
  const dispatch = useDispatch();
  const params = useParams<{ id: string }>();
  const authorId = Number(params.id);
  const scenes = useSelector(selectAuthorScenes(authorId));

  useEffect(() => {
    if (scenes.length === 0) {
      dispatch(getScenes);
    }
  }, [scenes, dispatch]);

  if (scenes.length === 0) return null; // should be some kind of loading indicator

  return (
    <div>
      <PageTitle>{scenes[0].authorName}</PageTitle>
      <div className="pageRow">
        <AboutDescriptionEditStyle>
          <h2>About</h2>
          <p>{scenes[0].authorAbout}</p>
        </AboutDescriptionEditStyle>
      </div>
      <div className="pageRow">
        <h2>Scenes</h2>
        {scenes.map((scene) => (
          <ScenesList key={scene.id} authorPage={true} {...scene} />
        ))}
      </div>
    </div>
  );
}
