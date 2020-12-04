import React from "react";
import { ActorWrapper } from "./ActorStyle";
import { ActorType } from "../store/types";
import { BodyPart } from "../general-styles/styledElements";

export default function Actor(
  props: ActorType & { scenePlayer?: boolean; position: "left" | "right" }
) {
  const face = {
    eye: props.type === "man" ? "o" : "(",
    moustache: "{",
    mouth: props.currentFace ? props.currentFace.mouth : "l",
  };

  return (
    <ActorWrapper
      className="personContainer"
      type={props.type}
      position={props.position}
      scenePlayer={props.scenePlayer}
    >
      <div className="actorBody">
        {/* ///// HEAD ///// */}
        <BodyPart
          backgroundColor={props.backgroundColor}
          color={props.color}
          className="head"
        >
          <BodyPart backgroundColor={props.backgroundColor} className="eye1">
            {face.eye}
          </BodyPart>
          <BodyPart backgroundColor={props.backgroundColor} className="eye2">
            {face.eye}
          </BodyPart>
          {props.type === "man" && (
            <BodyPart
              backgroundColor={props.backgroundColor}
              className="moustache"
            >
              {face.moustache}
            </BodyPart>
          )}
          <BodyPart backgroundColor={props.backgroundColor} className="mouth">
            {face.mouth}
          </BodyPart>
        </BodyPart>

        {/* ///// UPPER BODY ///// */}
        <BodyPart
          backgroundColor={props.backgroundColor}
          className="upperBody"
        ></BodyPart>
        <BodyPart
          backgroundColor={props.backgroundColor}
          className="arm1a"
        ></BodyPart>
        <BodyPart
          backgroundColor={props.backgroundColor}
          className="arm1b"
        ></BodyPart>
        <BodyPart
          backgroundColor={props.backgroundColor}
          className="hand1"
        ></BodyPart>
        {props.type === "man" ? (
          <div>
            <BodyPart
              backgroundColor={props.backgroundColor}
              className="arm2a"
            ></BodyPart>
            <BodyPart
              backgroundColor={props.backgroundColor}
              className="arm2b"
            ></BodyPart>
            <BodyPart
              backgroundColor={props.backgroundColor}
              className="hand2"
            ></BodyPart>
          </div>
        ) : (
          <div>
            <BodyPart
              backgroundColor={props.backgroundColor}
              className="womanArm2a"
            ></BodyPart>
            <BodyPart
              backgroundColor={props.backgroundColor}
              className="womanArm2b"
            ></BodyPart>
            <BodyPart
              backgroundColor={props.backgroundColor}
              className="womanHand2"
            ></BodyPart>
          </div>
        )}

        {/* ///// LEGS ///// */}
        <BodyPart>
          <BodyPart backgroundColor={props.backgroundColor} className="leg1">
            <BodyPart
              backgroundColor={props.backgroundColor}
              className="foot1"
            ></BodyPart>
          </BodyPart>
          <BodyPart backgroundColor={props.backgroundColor} className="leg2">
            <BodyPart
              backgroundColor={props.backgroundColor}
              className="foot2"
            ></BodyPart>
          </BodyPart>
          {props.type === "woman" && (
            <BodyPart
              borderBottom={props.backgroundColor}
              className="skirt"
            ></BodyPart>
          )}
        </BodyPart>
      </div>
      <div className="actorName">
        <p>
          <strong>{props.name}</strong>
        </p>
      </div>
    </ActorWrapper>
  );
}
