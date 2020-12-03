import React, { useState } from "react";
import { ActorWrapper, ActorBody } from "./ActorStyles";
import { ActorType } from "../store/types";

export default function Actor(props: ActorType) {
  // PROBABLY THESE BODY PARTS WILL BE MANAGED SOMEWHERE ELSE LATER...
  const [body] = useState({
    leftEye: "o",
    rightEye: "o",
    moustache: "{",
    mouth: "(",
  });

  return (
    <ActorWrapper className="personContainer">
      <ActorBody
        // className="person"
        type={props.type}
      >
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
            {body.leftEye}
          </div>
          <div
            style={{
              backgroundColor: props.backgroundColor,
            }}
            className="bodypart eye2"
          >
            {body.rightEye}
          </div>
          {props.type === "man" && (
            <div
              style={{
                backgroundColor: props.backgroundColor,
              }}
              className="bodypart moustache"
            >
              {body.moustache}
            </div>
          )}
          <div
            style={{
              backgroundColor: props.backgroundColor,
            }}
            className="bodypart mouth"
          >
            {body.mouth}
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
      </ActorBody>
      <div>
        <p>{props.name}</p>
      </div>
    </ActorWrapper>
  );
}
