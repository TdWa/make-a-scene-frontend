import React, { useState } from "react";
import { Button, ConfirmPopup } from "../general-styles/styledElements";
import { ActorType, CommentType } from "../store/types";
import Actor from "./Actor";
import { ScenesListStyle } from "./ScenesListStyle";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteScene } from "../store/user/actions";

type SceneListProp = {
  profilePage?: boolean;
  authorPage?: boolean;
  id: number;
  name: string;
  backgroundColor: string;
  description: string | null;
  actors: ActorType[];
  authorId?: number;
  authorName?: string;
  authorAbout?: string | null;
  comments?: CommentType[];
};

export default function ScenesList(props: SceneListProp) {
  const dispatch = useDispatch();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const {
    profilePage,
    authorPage,
    id,
    name,
    backgroundColor,
    description,
    actors,
    authorId,
    authorName,
  } = props;
  return (
    <ScenesListStyle
      profilePage={profilePage}
      backgroundColor={backgroundColor}
    >
      <div className="sceneSimple">
        <h3>
          <strong>{name}</strong>
          {profilePage && (
            <Button className="delete" onClick={() => setConfirmDelete(true)}>
              Delete
            </Button>
          )}
        </h3>
        {confirmDelete && (
          <ConfirmPopup>
            <div>
              <p>Are you sure?</p>
            </div>
            <div>
              <Button onClick={() => setConfirmDelete(false)}>Cancel</Button>
              <Button
                onClick={() => {
                  dispatch(deleteScene(id));
                  setConfirmDelete(false);
                }}
              >
                Yes
              </Button>
            </div>
          </ConfirmPopup>
        )}
        <div>
          <div className="actorContainer">
            {actors.map((actor, i) => (
              <Actor
                key={actor.id}
                {...actor}
                position={i === 0 ? "left" : "right"}
              />
            ))}
          </div>
          <div className="sceneLinksContainer">
            {!profilePage && !authorPage && (
              <div className="authorName">
                <div>
                  <h4>Author: {authorName}</h4>
                </div>
                <div></div>
              </div>
            )}
            <div className="sceneLinks">
              {profilePage ? (
                <Link to={`/myScenes/${id}`}>
                  <Button>Go to edit page</Button>
                </Link>
              ) : (
                !authorPage && (
                  <Link to={`/author/${authorId}`}>
                    <Button>Go to author page</Button>
                  </Link>
                )
              )}
              <Link to={`/scene/${id}`}>
                <Button>Go to scene page</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="sceneDescription">
        <h4>Description</h4>
        <p>
          {description
            ? description.length > 180
              ? description.slice(0, 180) + "..."
              : description
            : "-"}
        </p>
      </div>
    </ScenesListStyle>
  );
}

// onClick={() => dispatch(deleteScene(id))}
