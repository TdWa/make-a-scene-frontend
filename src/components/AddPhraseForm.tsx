import React, { useState } from "react";
import { Button, Form } from "../general-styles/styledElements";
import { ActorType } from "../store/types";

type AddPhraseFormProps = {
  addPhrase: (id: number, actorId: number, text: string) => void;
  setSaveableTrue: () => void;
  actors: ActorType[];
};

export default function AddPhraseForm(props: AddPhraseFormProps) {
  const { addPhrase, setSaveableTrue, actors } = props;
  const [phrase, setPhrase] = useState({
    id: 0,
    actorId: actors[0]?.id,
    text: "",
  });
  return (
    <Form
      left
      onSubmit={(e) => {
        e.preventDefault();
        if (phrase.actorId) {
          addPhrase(Date.now(), phrase.actorId, phrase.text);
          setPhrase({ ...phrase, text: "" });
          setSaveableTrue();
        }
      }}
    >
      <div>
        <label htmlFor="target">Actor:</label>
        <select
          id="target"
          name="target"
          onChange={(e) =>
            setPhrase({
              ...phrase,
              actorId: actors.find((actor) => actor.name === e.target.value)
                ?.id,
            })
          }
        >
          {actors.map((actor) => (
            <option key={actor.id} value={actor.name}>
              {actor.name}
            </option>
          ))}
        </select>
      </div>
      <div className="wide">
        <label htmlFor="textInput">Text:</label>
        <br></br>
        <textarea
          id="textInput"
          name="textInput"
          onChange={(e) => setPhrase({ ...phrase, text: e.target.value })}
          value={phrase.text}
          placeholder="Type something and then click the Add button to add it to the script!"
          required
        ></textarea>
      </div>
      <div>
        <Button>Add</Button>
      </div>
    </Form>
  );
}
