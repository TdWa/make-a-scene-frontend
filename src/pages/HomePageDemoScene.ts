import { ActorType, Phrase } from "../store/types";

export const demoScript: Phrase[] = [
  {
    actorId: 1,
    id: 1,
    index: 0,
    text: "Phrase sakjfbsakjbfaksjbfakj akbfsakj bab fasjkb ka kjbasjkf bska",
  },
  { actorId: 2, id: 2, index: 1, text: "Phrase two" },
  { actorId: 2, id: 3, index: 2, text: "Phrase three" },
  { actorId: 1, id: 4, index: 3, text: "Phrase four" },
  { actorId: 2, id: 5, index: 4, text: "Phrase five" },
];

export const demoActors: ActorType[] = [
  {
    id: 1,
    type: "man",
    name: '"<div id="Antonio" >"',
    backgroundColor: "#ffffff",
    color: "#000000",
    phrases: [
      {
        actorId: 1,
        id: 1,
        index: 0,
        text:
          "Phrase sakjfbsakjbfaksjbfakj akbfsakj bab fasjkb ka kjbasjkf bska",
      },
      { actorId: 1, id: 4, index: 3, text: "Phrase four" },
    ],
  },
  {
    id: 2,
    type: "woman",
    name: '<div id="Eva" >',
    backgroundColor: "#ffffff",
    color: "#000000",
    phrases: [
      { actorId: 2, id: 2, index: 1, text: "Phrase two" },
      { actorId: 2, id: 3, index: 2, text: "Phrase three" },
      { actorId: 2, id: 5, index: 4, text: "Phrase five" },
    ],
  },
];
