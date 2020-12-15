import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SceneListCard from "../components/SceneListCard";
import { PageFeedback, PageTitle } from "../general-styles/styledElements";
import { getScenes } from "../store/authors/actions";
import {
  selectAllScenes,
  selectAuthorsLoading,
} from "../store/authors/selectors";

export default function DiscoverScenesPage() {
  const dispatch = useDispatch();
  const scenes = useSelector(selectAllScenes);
  const loading = useSelector(selectAuthorsLoading);

  useEffect(() => {
    dispatch(getScenes);
  }, [dispatch]);

  if (loading) {
    return <PageFeedback>Loading...</PageFeedback>;
  }

  return (
    <div>
      <PageTitle>Discover Scenes</PageTitle>
      <div className="pageRow">
        {scenes.map((scene) => (
          <SceneListCard key={scene.id} {...scene} />
        ))}
      </div>
    </div>
  );
}
