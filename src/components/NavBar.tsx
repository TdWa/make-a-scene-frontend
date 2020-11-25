import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Header } from "../styles/styledElements";
import { logOut } from "../store/user/actions";
import { selectUser } from "../store/user/selectors";

export default function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Header>
      {user.name ? (
        <div>
          <p>Welcome back {user.name}</p>
          <Button onClick={() => dispatch(logOut())}>Logout</Button>
        </div>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
      <NavLink to="/" exact={true}>
        Home
      </NavLink>
      <br></br>
      <br></br>
      Public:
      <br></br>
      <NavLink to="/scenes">Public Scenes</NavLink>
      <br></br>
      <NavLink to="/scene/1">Scene 1</NavLink>
      <br></br>
      <NavLink to="/author/1">Author 1</NavLink>
      <br></br>
      <br></br>
      Personal:
      <br></br>
      <NavLink to="/myScenes">My Scenes</NavLink>
      <br></br>
      <NavLink to="/myScene/1">MyScene 1</NavLink>
    </Header>
  );
}
