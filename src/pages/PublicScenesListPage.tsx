import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScenesList from "../components/ScenesList";
import { PageTitle } from "../general-styles/styledElements";
import { getScenes } from "../store/authors/actions";
import { selectAllScenes } from "../store/authors/selectors";

export default function PublicScenesListPage() {
  const dispatch = useDispatch();
  const scenes = useSelector(selectAllScenes);

  useEffect(() => {
    dispatch(getScenes);
  }, [dispatch]);

  return (
    <div>
      <PageTitle>Discover Scenes</PageTitle>
      <div className="pageRow">
        {scenes.map((scene) => (
          <ScenesList key={scene.id} profilePage={false} {...scene} />
        ))}
      </div>
    </div>
  );
}
