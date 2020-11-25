import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserFeedbackMessage } from "../store/user/selectors";
import { clearUserFeedbackMessage } from "../store/user/actions";
import { FeedbackWrapper } from "../styles/styledElements";

export default function MessageBox() {
  const dispatch = useDispatch();
  const message = useSelector(selectUserFeedbackMessage);
  const showMessage = message !== null;
  if (!showMessage) return null;

  return (
    <FeedbackWrapper
      type={
        message === "Welcome back!" || message === "Account created!"
          ? "positive"
          : "negative"
      }
    >
      <p>
        {message}{" "}
        {message !== "Welcome back!" && message !== "Account created!" && (
          <button onClick={() => dispatch(clearUserFeedbackMessage())}>
            X
          </button>
        )}
      </p>
    </FeedbackWrapper>
  );
}
