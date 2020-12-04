import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CommentType } from "../store/types";
import { CommentWrapper } from "./CommentStyle";
import moment from "moment";
import { selectUser } from "../store/user/selectors";
import { deleteComment } from "../store/authors/actions";

export default function Comment(props: CommentType) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <CommentWrapper>
      <p>
        <strong>{props.userName} </strong>-{" "}
        <span>{moment(props.createdAt).format("lll")}</span>
      </p>
      <p>{props.text}</p>
      {user.id === props.userId && (
        <button
          className="deleteComment"
          onClick={() => {
            if (props.id) {
              dispatch(deleteComment(props.id));
            }
          }}
        >
          delete
        </button>
      )}
    </CommentWrapper>
  );
}
