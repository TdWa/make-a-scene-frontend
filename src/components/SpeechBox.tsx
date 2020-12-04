import React from "react";
import { SpeechBoxWrapper } from "./SpeechBoxStyle";

export default function SpeechBox(props: { currentText: string | undefined }) {
  return <SpeechBoxWrapper>{props.currentText}</SpeechBoxWrapper>;
}
