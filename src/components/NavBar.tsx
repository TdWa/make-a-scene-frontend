import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
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
      <br></br>
      Personal:
      <br></br>
      <NavLink to="/myScenes">My Scenes</NavLink>
      <br></br>
      <NavLink to="/myScene/1">MyScene 1</NavLink>
      <br></br>
      <br></br>
      Login stuff:
      <br></br>
      <NavLink to="/signup">Signup</NavLink>
      <br></br>
      <NavLink to="/login">Login</NavLink>
      <br></br>
      <br></br>
    </div>
  );
}
