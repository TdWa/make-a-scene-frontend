import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserFeedbackMessage } from "../store/user/selectors";
import { clearUserFeedbackMessage } from "../store/user/actions";
import { FeedbackWrapper } from "../general-styles/styledElements";
import { selectAuthorsFeedbackMessage } from "../store/authors/selectors";
import { clearScenesFetchError } from "../store/authors/actions";

export default function MessageBox() {
  const dispatch = useDispatch();
  const message = useSelector(selectUserFeedbackMessage);
  const authorsFetchError = useSelector(selectAuthorsFeedbackMessage);
  const showMessage = message !== null || authorsFetchError !== null;
  if (!showMessage) return null;

  return (
    <FeedbackWrapper
      type={
        message === "Welcome back!" || message === "Account created!"
          ? "positive"
          : "negative"
      }
    >
      {message && (
        <p>
          {message}{" "}
          {message !== "Welcome back!" && message !== "Account created!" && (
            <button onClick={() => dispatch(clearUserFeedbackMessage())}>
              X
            </button>
          )}
        </p>
      )}
      {authorsFetchError && (
        <p>
          {authorsFetchError}{" "}
          <button onClick={() => dispatch(clearScenesFetchError())}>X</button>{" "}
        </p>
      )}
    </FeedbackWrapper>
  );
}
