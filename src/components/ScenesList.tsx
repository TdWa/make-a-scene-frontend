import React from "react";
import { Button } from "../general-styles/styledElements";
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
  const { profilePage, id, name, actors } = props;
  return (
    <ScenesListStyle>
      <h3>
        <strong>{name}</strong>
        {/* <Button className="description">View description</Button> */}
        {profilePage && (
          <Button className="delete" onClick={() => dispatch(deleteScene(id))}>
            Delete
          </Button>
        )}
      </h3>
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

// type ScenePlayerProp = {
//   small?: boolean;
// };

// margin: ${({ center }) => (center ? "0 auto" : "0")};
// ${({ center }) => center && "display: block;"}

// ${({ save }) =>
//     save &&
//     css`
//       background-color: darkgreen;
//       position: absolute;
//       top: 150px;
//       right: 10px;
//     `}
