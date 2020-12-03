import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editAbout } from "../store/user/actions";
import { selectUser } from "../store/user/selectors";
import {
  AboutDescriptionEditStyle,
  Button,
  PageFeedback,
  PageTitle,
} from "../general-styles/styledElements";
import { Link, Redirect } from "react-router-dom";
import ScenesList from "../components/ScenesList";

export default function MyProfilePage() {
  const dispatch = useDispatch();
  const [about, setAbout] = useState("");
  const [edit, setEdit] = useState(false);
  const user = useSelector(selectUser);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const textBeforeEdit = useRef("");

  useEffect(() => {
    if (user.about) {
      setAbout(user.about);
    }
  }, [user.about, user.message]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.selectionStart = textareaRef.current.selectionEnd =
        textareaRef.current.value.length;
    }
  }, [edit]);

  if (!user.token) {
    // visitor is not logged in
    return <Redirect to={"/"} />;
  } else if (!user.name) {
    // the App.tsx useEffect will go check the token with getUserWithStoredToken (and remove it if it is not valid)
    return <PageFeedback>Loading...</PageFeedback>;
  }

  const handleSave = () => {
    setEdit(false);
    dispatch(editAbout(about));
  };

  return (
    <div>
      <PageTitle>My profile</PageTitle>
      <div className="pageRow">
        <AboutDescriptionEditStyle>
          <h2>About</h2>
          {edit ? (
            <div>
              <div className="saveOrCancel">
                <Button className="editAbout" onClick={handleSave}>
                  Save
                </Button>
                <Button
                  className="editAbout"
                  onClick={() => {
                    setAbout(textBeforeEdit.current);
                    setEdit(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                ref={textareaRef}
              ></textarea>
            </div>
          ) : (
            <div>
              <Button
                className="editAbout"
                onClick={() => {
                  setEdit(true);
                  textBeforeEdit.current = about;
                }}
              >
                Edit
              </Button>
              <p>{about}</p>
            </div>
          )}
        </AboutDescriptionEditStyle>
      </div>
      <div className="pageRow">
        <Link to={`/author/${user.id}`}>
          <Button>Go to my public page</Button>
        </Link>
      </div>
      <div className="pageRow">
        <Link to="/myScenes/new">
          <Button right>Make a new scene!</Button>
        </Link>
      </div>
      <div className="pageRow">
        <h2>My scenes</h2>
        {user.scenes.map((scene) => (
          <ScenesList key={scene.id} profilePage={true} {...scene} />
        ))}
      </div>
    </div>
  );
}
