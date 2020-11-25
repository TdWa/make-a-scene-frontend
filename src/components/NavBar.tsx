import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/styledElements";
import { logOut } from "../store/user/actions";

export default function NavBar() {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
      <br></br>
      <NavLink to="/login">Login</NavLink>
      <br></br>
      <br></br>
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
    </div>
  );
}
