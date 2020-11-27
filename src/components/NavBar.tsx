import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Header } from "../general-styles/styledElements";
import { logOut } from "../store/user/actions";
import { selectUser } from "../store/user/selectors";

export default function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Header>
      <div>
        <NavLink to="/" exact={true}>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/scenes">Public Scenes</NavLink>
        {/* <NavLink to="/scene/1">Scene 1</NavLink>
        <NavLink to="/author/1">Author 1</NavLink> */}
      </div>
      <div>
        <NavLink to="/myScenes">My Scenes</NavLink>
        {/* <NavLink to="/myScenes/1">MyScene 1</NavLink>
        <NavLink to="/myScenes/new">New Scene</NavLink> */}
      </div>
      <div>
        {user.name ? (
          <div>
            <p>
              {user.name}{" "}
              <Button onClick={() => dispatch(logOut())}>Logout</Button>
            </p>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </Header>
  );
}
