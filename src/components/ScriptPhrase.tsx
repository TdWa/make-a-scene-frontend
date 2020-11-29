import React from "react";
import { ScriptPhraseWrapper } from "./ScriptPhraseStyle";

type ScriptPhraseProps = {
  id: number;
  index: number;
  text: string;
  actorName: string | undefined;
  actorPosition: "LEFT" | "MIDDLE" | "RIGHT";
  deletePhrase: (id: number) => void;
  movePhrase: (currentIndex: number, direction: "UP" | "DOWN") => void;
};

export default function ScriptPhrase(props: ScriptPhraseProps) {
  const {
    id,
    index,
    text,
    actorName,
    actorPosition,
    deletePhrase,
    movePhrase,
  } = props;
  return (
    <ScriptPhraseWrapper position={actorPosition}>
      <p>
        <strong>{actorName}</strong>
      </p>
      <p>{text}</p>
      <button onClick={() => deletePhrase(id)}>Delete</button>
      <button onClick={() => movePhrase(index, "DOWN")}>Move Down</button>
      <button onClick={() => movePhrase(index, "UP")}>Move Up</button>
    </ScriptPhraseWrapper>
  );
}

/*
export default function Phrase({
  id,
  forActor,
  text,
  removeText,
  moveUp,
  moveDown,
}) {
  return (
    <div className={`inputText ${forActor}`}>
      <p>
        <strong>{forActor}</strong>
      </p>
      <p>{text}</p>
      <button onClick={() => removeText(id)}>Delete</button>
      <button onClick={() => moveDown(id)}>Move Down</button>
      <button onClick={() => moveUp(id)}>Move Up</button>
    </div>
  );
}
*/
