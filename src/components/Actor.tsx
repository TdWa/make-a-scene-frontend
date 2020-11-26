import React, { useState } from "react";
import { ActorWrapper, ActorBody } from "../styles/styledElements";
import { ActorType } from "../store/types";

export default function Actor(props: ActorType) {
  // PROBABLY THESE BODY PARTS WILL BE MANAGED SOMEWHERE ELSE LATER...
  const [body] = useState({
    leftEye: "o",
    rightEye: "o",
    moustache: "{",
    mouth: "o",
  });

  return (
    <ActorWrapper>
      <ActorBody bg={props.backgroundColor} color={props.color}>
        <div className="head">
          <div className="eyes">
            <div>{body.leftEye}</div>
            <div>{body.rightEye}</div>
          </div>
          <div className="moustache">
            {props.type === "male" && body.moustache}
          </div>
          <div>{body.mouth}</div>
        </div>
        <div className="chest">{props.name}</div>
      </ActorBody>
    </ActorWrapper>
  );
}

/*
export default function Actor({ gender }) {
  const male = gender === "male";
  return (
    <div className={`personContainer ${gender}`}>
      <div className="speechBoxContainer">
        {male ? (
          <div id="manText" className="speechBox"></div>
        ) : (
          <div id="womanText" className="speechBox"></div>
        )}
      </div>
      <div className={`person`}>
        <div className="head">
          <div className="eye1">{male ? "o" : "("}</div>
          <div className="eye2">{male ? "o" : "("}</div>
          {male ? <div className="moustache">{"{"}</div> : <div></div>}
          <div className="mouth">o</div>
        </div>
        <div className="upperBody">
          <div className="arm1a"></div>
          <div className="arm1b"></div>
          <div className="hand1"></div>
          {male ? (
            <div>
              <div className="arm2a"></div>
              <div className="arm2b"></div>
              <div className="hand2"></div>
            </div>
          ) : (
            <div>
              <div className="femaleArm2a"></div>
              <div className="femaleArm2b"></div>
              <div className="femaleHand2"></div>
            </div>
          )}
        </div>
        <div className="legs">
          <div className="leg1">
            <div className="foot1"></div>
          </div>
          <div className="leg2">
            <div className="foot2"></div>
          </div>
          {male ? <div></div> : <div className="skirt"></div>}
        </div>
      </div>
    </div>
  );
}
*/
