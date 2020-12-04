import { ActorType, Phrase } from "../store/types";

export const demoBackground = "#adc7c7";

export const demoScript: Phrase[] = [
  { actorId: 1, id: 1, index: 0, text: "Hello there!" },
  { actorId: 1, id: 2, index: 1, text: "Welcome to Make a Scene!" },
  {
    actorId: 1,
    id: 3,
    index: 2,
    text:
      "This is a platform for creating, sharing and discussing conversation scenes.",
  },
  {
    actorId: 1,
    id: 4,
    index: 3,
    text:
      "You can create animated scripts and watch our actors make your ideas come to life!",
  },
  {
    actorId: 1,
    id: 5,
    index: 4,
    text: "Go to Discover Scenes to see the work of other authors...",
  },
  {
    actorId: 1,
    id: 6,
    index: 5,
    text: "...or sign up and create your very own scene!",
  },
];

export const demoActors: ActorType[] = [
  {
    id: 1,
    type: "man",
    name: "Host",
    backgroundColor: "#ffffff",
    color: "#000000",
    phrases: [
      { actorId: 1, id: 1, index: 0, text: "Hello there!" },
      { actorId: 1, id: 2, index: 1, text: "Welcome to Make a Scene!" },
      {
        actorId: 1,
        id: 3,
        index: 2,
        text:
          "This is a platform for creating, sharing and discussing conversation scenes.",
      },
      {
        actorId: 1,
        id: 4,
        index: 3,
        text:
          "You can create animated scripts and watch our actors make your ideas come to life!",
      },
      {
        actorId: 1,
        id: 5,
        index: 4,
        text: "Go to Discover Scenes to see the work of other authors...",
      },
      {
        actorId: 1,
        id: 6,
        index: 5,
        text: "...or sign up and create your very own scene!",
      },
    ],
  },
];
