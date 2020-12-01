import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editAbout } from "../store/user/actions";
import { selectUser } from "../store/user/selectors";
import {
  AboutDescriptionEditStyle,
  Button,
  PageTitle,
} from "../general-styles/styledElements";
import { Link } from "react-router-dom";
import ScenesList from "../components/ScenesList";

export default function MyProfilePage() {
  const dispatch = useDispatch();
  const [about, setAbout] = useState("");
  const [edit, setEdit] = useState(false);
  const user = useSelector(selectUser);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const textBeforeEdit = useRef("");

  // still need to fix not logged in situation, jwt expired etc

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
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                ref={textareaRef}
              ></textarea>
              <Button onClick={handleSave}>Save</Button>
              <Button
                onClick={() => {
                  setAbout(textBeforeEdit.current);
                  setEdit(false);
                }}
              >
                Cancel
              </Button>
            </div>
          ) : (
            <div>
              <p>{about}</p>
              <Button
                onClick={() => {
                  setEdit(true);
                  textBeforeEdit.current = about;
                }}
              >
                Edit
              </Button>
            </div>
          )}
        </AboutDescriptionEditStyle>
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
