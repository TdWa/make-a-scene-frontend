import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button } from "../general-styles/styledElements";
import { logOut } from "../store/user/actions";
import { selectUser } from "../store/user/selectors";
import { Header } from "./NavBarStyle";

export default function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Header>
      <nav>
        <div>
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink exact to="/scenes">
            Discover Scenes
          </NavLink>
        </div>
        <div>
          {user.name && (
            <NavLink exact to="/myScenes">
              My Profile
            </NavLink>
          )}
        </div>
        <div>
          {user.name ? (
            <div>
              <p>
                {user.name} &nbsp;
                <Button invert onClick={() => dispatch(logOut())}>
                  Logout
                </Button>
              </p>
            </div>
          ) : (
            <NavLink exact to="/login">
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </Header>
  );
}
