import React from "react";
import { ScriptPhraseWrapper } from "./ScriptPhraseStyle";

type ScriptPhraseProps = {
  text: string;
  actorName: string | undefined;
  actorPosition: "LEFT" | "MIDDLE" | "RIGHT";
};

export default function ScriptPhrase(props: ScriptPhraseProps) {
  const { text, actorName, actorPosition } = props;
  return (
    <ScriptPhraseWrapper position={actorPosition}>
      <p>
        <strong>{actorName}</strong>
      </p>
      <p>{text}</p>
      <button>Delete</button>
      <button>Move Down</button>
      <button>Move Up</button>
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
