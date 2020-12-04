import React from "react";
import { ActorWrapper } from "./ActorStyle";
import { ActorType } from "../store/types";

export default function Actor(props: ActorType & { scenePlayer?: boolean }) {
  const face = {
    eye: props.type === "man" ? "o" : "(",
    moustache: "{",
    mouth: props.currentFace ? props.currentFace.mouth : "l",
  };

  return (
    <ActorWrapper
      className="personContainer"
      type={props.type}
      scenePlayer={props.scenePlayer}
    >
      <div className="actorBody">
        {/* ///// HEAD ///// */}
        <div
          style={{ backgroundColor: props.backgroundColor, color: props.color }}
          className="bodypart head"
        >
          <div
            style={{
              backgroundColor: props.backgroundColor,
            }}
            className="bodypart eye1"
          >
            {face.eye}
          </div>
          <div
            style={{
              backgroundColor: props.backgroundColor,
            }}
            className="bodypart eye2"
          >
            {face.eye}
          </div>
          {props.type === "man" && (
            <div
              style={{
                backgroundColor: props.backgroundColor,
              }}
              className="bodypart moustache"
            >
              {face.moustache}
            </div>
          )}
          <div
            style={{
              backgroundColor: props.backgroundColor,
            }}
            className="bodypart mouth"
          >
            {face.mouth}
          </div>
        </div>

        {/* ///// UPPER BODY ///// */}
        <div
          style={{ backgroundColor: props.backgroundColor }}
          className="bodypart upperBody"
        ></div>
        <div
          style={{
            backgroundColor: props.backgroundColor,
          }}
          className="bodypart arm1a"
        ></div>
        <div
          style={{
            backgroundColor: props.backgroundColor,
          }}
          className="bodypart arm1b"
        ></div>
        <div
          style={{
            backgroundColor: props.backgroundColor,
          }}
          className="bodypart hand1"
        ></div>
        {props.type === "man" ? (
          <div>
            <div
              style={{
                backgroundColor: props.backgroundColor,
              }}
              className="bodypart arm2a"
            ></div>
            <div
              style={{
                backgroundColor: props.backgroundColor,
              }}
              className="bodypart arm2b"
            ></div>
            <div
              style={{
                backgroundColor: props.backgroundColor,
              }}
              className="bodypart hand2"
            ></div>
          </div>
        ) : (
          <div>
            <div
              style={{
                backgroundColor: props.backgroundColor,
              }}
              className="bodypart womanArm2a"
            ></div>
            <div
              style={{
                backgroundColor: props.backgroundColor,
              }}
              className="bodypart womanArm2b"
            ></div>
            <div
              style={{
                backgroundColor: props.backgroundColor,
              }}
              className="bodypart womanHand2"
            ></div>
          </div>
        )}

        {/* ///// LEGS ///// */}
        <div>
          <div
            style={{
              backgroundColor: props.backgroundColor,
            }}
            className="bodypart leg1"
          >
            <div
              style={{
                backgroundColor: props.backgroundColor,
              }}
              className="bodypart foot1"
            ></div>
          </div>
          <div
            style={{
              backgroundColor: props.backgroundColor,
            }}
            className="bodypart leg2"
          >
            <div
              style={{
                backgroundColor: props.backgroundColor,
              }}
              className="bodypart foot2"
            ></div>
          </div>
          {props.type === "woman" && (
            <div
              style={{
                borderBottom: `100px solid ${props.backgroundColor}`,
              }}
              className="bodypart skirt"
            ></div>
          )}
        </div>
      </div>
      <div className="actorName">
        <p>
          <strong>{props.name}</strong>
        </p>
      </div>
    </ActorWrapper>
  );
}
