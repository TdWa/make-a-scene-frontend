import React from "react";
import { SpeechBoxWrapper } from "./SpeechBoxStyle";

export default function SpeechBox(props: { currentText: string | undefined }) {
  const { currentText } = props;

  return <SpeechBoxWrapper>{currentText}</SpeechBoxWrapper>;
}
