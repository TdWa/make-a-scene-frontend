import React from "react";
import { useSelector } from "react-redux";
import { PageTitle, StyledLink } from "../general-styles/styledElements";
import { selectUser } from "../store/user/selectors";
import { HomePageStyle } from "./HomePageStyle";

export default function HomePage() {
  const user = useSelector(selectUser);

  return (
    <HomePageStyle>
      <PageTitle>Make a Scene</PageTitle>
      {/* maybe do it with AboutDescriptionEditStyle */}
      <div className="welcome">
        <h2>Welcome</h2>
        <p>welcome text</p>
      </div>
      <div className="homeNav">
        <div>Discover Scenes</div>
        <div>
          Make your own scene /{" "}
          {!user.name && (
            <p>
              <StyledLink to="/login">Login</StyledLink> /
              <StyledLink to="/signup">Signup</StyledLink>
            </p>
          )}
        </div>
      </div>
      <div className="demo">
        demo sceneplayer selected from public store slice
      </div>
    </HomePageStyle>
  );
}
