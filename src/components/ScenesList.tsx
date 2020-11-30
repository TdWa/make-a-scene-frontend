import React, { useState } from "react";
import { Button, ConfirmPopup } from "../general-styles/styledElements";
import { Scene } from "../store/types";
import Actor from "./Actor";
import { ScenesListStyle } from "./ScenesListStyle";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteScene } from "../store/user/actions";

type SceneListProp = Scene & {
  profilePage: boolean;
};

export default function ScenesList(props: SceneListProp) {
  const dispatch = useDispatch();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { profilePage, id, name, actors } = props;
  return (
    <ScenesListStyle>
      <h3>
        <strong>{name}</strong>
        {/* <Button className="description">View description</Button> */}
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
        <div>
          {actors.map((actor) => (
            <Actor key={actor.id} {...actor} />
          ))}
        </div>
        {profilePage && (
          <div>
            <Link to={`/myScenes/${id}`}>
              <Button>Go to edit page</Button>
            </Link>
            <Link to={`/scene/${id}`}>
              <Button>Go to public page</Button>
            </Link>
          </div>
        )}
      </div>
    </ScenesListStyle>
  );
}

// onClick={() => dispatch(deleteScene(id))}
