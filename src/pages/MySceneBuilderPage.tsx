import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, PageTitle } from "../general-styles/styledElements";
import { selectUserSceneById } from "../store/user/selectors";
import ScenePlayer from "../components/ScenePlayer";
import { ActorType, Phrase } from "../store/types";
import ScriptPhrase from "../components/ScriptPhrase";

// still need to fix not logged in situation, jwt expired etc
export default function MySceneBuilderPage() {
  // const dispatch = useDispatch();
  const sceneId = Number(useParams<{ id: string }>().id);
  const scene = useSelector(selectUserSceneById(sceneId));
  const [actors, setActors] = useState<ActorType[]>([]);
  const [script, setScript] = useState<Phrase[]>([]);
  const actorText = useRef("");

  useEffect(() => {
    if (scene) {
      const phrases = scene.actors
        .flatMap((actor) => (actor.phrases ? actor.phrases : []))
        ?.sort((a, b) => (a && b ? a.index - b.index : 0));

      setScript(phrases);
      setActors(scene.actors);
    }
  }, [scene]);

  if (!scene) return <p>Loading or whatever..</p>; // change this ;)

  function playScene(script: Phrase[]) {
    if (script.length > 0) {
      const text = script[0].text;
      actorText.current = "";
      for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
          // mouth.textContent = i % 5 === 0 ? "O" : "o";
          actorText.current += text[i];
          setActors(
            actors.map((actor) => {
              if (actor.id !== script[0].actorId) {
                return { ...actor, currentText: "" };
              } else {
                return { ...actor, currentText: actorText.current };
              }
            })
          );
        }, 50 * i);
      }

      setTimeout(() => {
        // mouth.textContent = "o";
        playScene(script.slice(1));
      }, 1000 + 50 * text.length);
    }
  }

  return (
    <div>
      <PageTitle>{scene.name}</PageTitle>
      <ScenePlayer actors={actors} />
      <Button onClick={() => playScene(script)}>Play</Button>
      {script.map((phrase) => {
        const actor = actors.find((actor) => actor.id === phrase.actorId);

        const actorPosition =
          scene.actors.length === 1
            ? "MIDDLE"
            : actor && actors.indexOf(actor) === 0
            ? "LEFT"
            : "RIGHT";

        return (
          <ScriptPhrase
            key={phrase.id}
            text={phrase.text}
            actorName={actor?.name}
            actorPosition={actorPosition}
          />
        );
      })}
    </div>
  );
}

// function handleStart() {
//   // document.getElementById("manText").textContent = "";
//   // document.getElementById("womanText").textContent = "";
//   // print(scene);
// }

/*
  function addText(id: number, actorId: number, index: number, text: string) {
    setScene([...scene, { id, actorId, index, text }]);
  }
  function removeText(id: number) {
    // const indexToRemove = scene.findIndex((phrase) => phrase.id === id);
    // const newScene = [...scene];
    // newScene.splice(indexToRemove, 1);
    // setScene(newScene);
  }
  function moveUp(id: number) {
    // const indexToChange = scene.findIndex((phrase) => phrase.id === id);
    // if (indexToChange > 0) {
    // const newScene = [...scene];
    // const swapper = newScene[indexToChange - 1];
    // newScene[indexToChange - 1] = newScene[indexToChange];
    // newScene[indexToChange] = swapper;
    // setScene(newScene);
    // }
  }
  function moveDown(id: number) {
    // const indexToChange = scene.findIndex((phrase) => phrase.id === id);
    // if (indexToChange < scene.length - 1) {
    // const newScene = [...scene];
    // const swapper = newScene[indexToChange + 1];
    // newScene[indexToChange + 1] = newScene[indexToChange];
    // newScene[indexToChange] = swapper;
    // setScene(newScene);
    // }
  }
  */

// return (
//   <div>
//     <PageTitle>New scene name!</PageTitle>
//     <div>
//       <div id="actorContainerContainer">
//         <div id="actorContainer">
//           {/* <Actor gender="man" >*/}
//           {/* <Actor gender="woman" /> */}
//         </div>
//       </div>
//       <div id="sceneControls">
//         <button id="startButton" onClick={handleStart}>
//           Start
//         </button>
//       </div>
//       <div id="inputContainerContainer">
//         <div id="inputContainer">
//           {scene.map((phrase, i) => {
//             return (
//               <p key={i}>test</p>
//               // <Phrase
//               // key={Math.random()}
//               // {...phrase}
//               // removeText={removeText}
//               // moveUp={moveUp}
//               // moveDown={moveDown}
//               // />
//             );
//           })}
//         </div>
//       </div>
//       {/* <AddTextForm addText={addText} /> */}
//     </div>
//     ;
//   </div>
// );

// import AddTextForm from "./components/AddTextForm/AddTextForm";

/*
      // document.getElementById("startButton").style.visibility = "hidden";
      // if (script.length === 1) {
      //   setTimeout(() => {
      //     document.getElementById("startButton").style.visibility = "visible";
      //   }, 1000 + 50 * text.length);
      // }

  */
