import { ActorType, Phrase } from "./store/types";

const initialFace: {
  mouth: "l";
} = {
  mouth: "l",
};

export const playScene = (
  script: Phrase[],
  actors: ActorType[],
  actorTextRef: React.MutableRefObject<string>,
  setActors: React.Dispatch<React.SetStateAction<ActorType[]>>,
  setPlayable: React.Dispatch<React.SetStateAction<boolean>>,
  timeoutRefs: React.MutableRefObject<number[]>
) => {
  if (script.length > 0) {
    const text = script[0].text;
    actorTextRef.current = "";
    for (let i = 0; i < text.length; i++) {
      timeoutRefs.current.push(
        setTimeout(() => {
          actorTextRef.current += text[i];
          setActors(
            actors.map((actor) => {
              if (actor.id !== script[0].actorId) {
                return { ...actor, currentText: "", currentFace: initialFace };
              } else {
                return {
                  ...actor,
                  currentText: actorTextRef.current,
                  currentFace: {
                    ...initialFace,
                    mouth: i % 5 === 0 ? "O" : "o",
                  },
                };
              }
            })
          );
        }, 50 * i)
      );
    }

    timeoutRefs.current.push(
      setTimeout(() => {
        playScene(
          script.slice(1),
          actors,
          actorTextRef,
          setActors,
          setPlayable,
          timeoutRefs
        );
      }, 1000 + 50 * text.length)
    );
  } else {
    setActors(
      actors.map((actor) => ({
        ...actor,
        currentText: "",
        currentFace: initialFace,
      }))
    );
    setPlayable(true);
  }
};
