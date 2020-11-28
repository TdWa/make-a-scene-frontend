import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PageTitle } from "../general-styles/styledElements";
import { selectUserSceneById } from "../store/user/selectors";
import ScenePlayer from "../components/ScenePlayer";
import { Phrase } from "../store/types";
import ScriptPhrase from "../components/ScriptPhrase";

// still need to fix not logged in situation, jwt expired etc
export default function MySceneBuilderPage() {
  const sceneId = Number(useParams<{ id: string }>().id);
  const scene = useSelector(selectUserSceneById(sceneId));
  const [script, setScript] = useState<Phrase[]>([]);

  useEffect(() => {
    if (scene) {
      const phrases = scene.actors
        .flatMap((actor) => (actor.phrases ? actor.phrases : []))
        ?.sort((a, b) => (a && b ? a.index - b.index : 0));

      setScript(phrases);
    }
  }, [scene]);

  if (!scene) return <p>Loading or whatever..</p>; // change this ;)

  console.log("scene, script", scene, script);

  return (
    <div>
      <PageTitle>{scene.name}</PageTitle>
      <ScenePlayer scene={scene} />
      {script.map((phrase) => {
        const actor = scene.actors.find((actor) => actor.id === phrase.actorId);

        const actorPosition =
          scene.actors.length === 1
            ? "MIDDLE"
            : actor && scene.actors.indexOf(actor) === 0
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

/*
  const [scene] = useState([
    { id: Math.random(), actorId: 1, index: 0, text: "Hey, how are you?" },
    {
      id: Math.random(),
      actorId: 1,
      index: 1,
      text: "I'm fine thanks, what's up?",
    },
  ]);
  */

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

// import Actor from "./components/Actor/Actor";
// import Phrase from "./components/Phrase/Phrase";
// import AddTextForm from "./components/AddTextForm/AddTextForm";

/*
function print(scene) {
if (scene.length > 0) {
const target =
scene[0].actorId === "man"
? document.getElementById("manText")
: document.getElementById("womanText");
const text = scene[0].text;
const mouth =
scene[0].actorId === "man"
? document.getElementsByClassName("mouth")[0]
: document.getElementsByClassName("mouth")[1];

    document.getElementById("startButton").style.visibility = "hidden";
    if (scene.length === 1) {
      setTimeout(() => {
        document.getElementById("startButton").style.visibility = "visible";
      }, 1000 + 50 * text.length);
    }

    target.textContent = "";
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        mouth.textContent = i % 5 === 0 ? "O" : "o";
        target.textContent += text[i];
      }, 50 * i);
    }

    setTimeout(() => {
      mouth.textContent = "o";
      print(scene.slice(1));
    }, 1000 + 50 * text.length);

}
}
*/
