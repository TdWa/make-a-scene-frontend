import React, { useState, useEffect, useRef } from "react";
import { ScriptPhraseWrapper } from "./ScriptPhraseStyle";

type ScriptPhraseProps = {
  id: number;
  index: number;
  text: string;
  actorName: string | undefined;
  actorPosition: "LEFT" | "MIDDLE" | "RIGHT";
  deletePhrase: (id: number) => void;
  movePhrase: (currentIndex: number, direction: "UP" | "DOWN") => void;
  editPhrase: (id: number, newText: string) => void;
};

export default function ScriptPhrase(props: ScriptPhraseProps) {
  const [edit, setEdit] = useState(false);
  const textInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textInputRef.current) {
      textInputRef.current.focus();
      textInputRef.current.selectionStart = textInputRef.current.selectionEnd =
        textInputRef.current.value.length;
    }
  }, [edit]);

  const {
    id,
    index,
    text,
    actorName,
    actorPosition,
    deletePhrase,
    movePhrase,
    editPhrase,
  } = props;
  return (
    <ScriptPhraseWrapper position={actorPosition}>
      <p>
        <strong>{actorName}</strong>
      </p>
      {edit ? (
        <input
          value={text}
          onChange={(e) => editPhrase(id, e.target.value)}
          ref={textInputRef}
        ></input>
      ) : (
        <p>{text}</p>
      )}
      <button className="deletePhrase" onClick={() => deletePhrase(id)}>
        Delete
      </button>
      <button className="movePhraseUp" onClick={() => movePhrase(index, "UP")}>
        /\
      </button>
      <button
        className="movePhraseDown"
        onClick={() => movePhrase(index, "DOWN")}
      >
        \/
      </button>
      {edit ? (
        <button className="editPhrase" onClick={() => setEdit(false)}>
          OK
        </button>
      ) : (
        <button className="editPhrase" onClick={() => setEdit(true)}>
          Edit
        </button>
      )}
    </ScriptPhraseWrapper>
  );
}
